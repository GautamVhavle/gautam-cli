#!/usr/bin/env node

import { confirm, input, select, Separator } from "@inquirer/prompts";
import boxen from "boxen";
import chalk from "chalk";
import gradient from "gradient-string";
import open from "open";
import { createRequire } from "node:module";
import {
  certifications,
  experience,
  highlights,
  interests,
  profile,
  projects,
  skillGroups,
  story,
} from "./data.js";

const require = createRequire(import.meta.url);
const { version } = require("./package.json");
const accent = gradient(["#a78bfa", "#22d3ee"]);
const noClear = process.argv.includes("--no-clear");
const isCancelled = (error) => error?.name === "ExitPromptError";

const terminalWidth = () =>
  Math.min(Math.max(process.stdout.columns || 80, 46), 92);

function clear() {
  if (!noClear && process.stdout.isTTY) console.clear();
}

function panel(title, content, color = "cyan") {
  return boxen(content, {
    title: chalk.bold(` ${title} `),
    titleAlignment: "left",
    width: terminalWidth(),
    padding: 1,
    margin: { top: 1, bottom: 1, left: 0, right: 0 },
    borderStyle: "round",
    borderColor: color,
  });
}

function header(compact = false) {
  clear();
  if (compact) {
    console.log(accent(`  GV / TERMINAL PORTFOLIO  v${version}`));
  } else {
    console.log(
      accent(
        [
          "",
          "   ██████╗ ██╗   ██╗",
          "  ██╔════╝ ██║   ██║",
          "  ██║  ███╗██║   ██║",
          "  ██║   ██║╚██╗ ██╔╝",
          "  ╚██████╔╝ ╚████╔╝ ",
          "   ╚═════╝   ╚═══╝  ",
        ].join("\n"),
      ),
    );
    console.log(chalk.bold.white(`  ${profile.name.toUpperCase()}`));
  }
  console.log(
    chalk.gray(`  ${profile.roles.join(" · ")}`) +
      chalk.green("\n  ● ") +
      chalk.dim(`${profile.status}\n`),
  );
}

async function pause(message = "Press enter to go back") {
  await input({ message: chalk.dim(message) });
}

async function openUrl(label, url) {
  try {
    console.log(chalk.dim(`\nOpening ${label}…`));
    await open(url);
    console.log(chalk.green("✓ Opened in your browser"));
  } catch {
    console.log(chalk.yellow("Could not open a browser on this system."));
    console.log(chalk.cyan.underline(url));
  }
}

const backChoice = { name: "← Back", value: null };

async function aboutMenu() {
  let active = true;
  while (active) {
    header(true);
    const view = await select({
      message: "About Gautam",
      choices: [
        {
          name: "Profile",
          value: "profile",
          description: "Work, location, and focus",
        },
        {
          name: "Origin story",
          value: "story",
          description: "From taking things apart to AI",
        },
        {
          name: "Beyond the terminal",
          value: "interests",
          description: "Music, games, drives, and more",
        },
        {
          name: "Highlights",
          value: "highlights",
          description: "A few things I am proud of",
        },
        backChoice,
      ],
    });
    if (!view) return;

    header(true);
    if (view === "profile") {
      console.log(
        panel(
          "PROFILE",
          [
            chalk.bold(profile.bio),
            "",
            `${chalk.cyan("ROLE").padEnd(18)} ${profile.role}`,
            `${chalk.cyan("LOCATION").padEnd(18)} ${profile.location}`,
            `${chalk.cyan("TIMEZONE").padEnd(18)} ${profile.timezone}`,
            `${chalk.cyan("PRONOUNS").padEnd(18)} ${profile.pronouns}`,
            `${chalk.cyan("EMAIL").padEnd(18)} ${profile.email}`,
          ].join("\n"),
          "magenta",
        ),
      );
    }
    if (view === "story") {
      console.log(
        panel(
          "THE BUILD PATH",
          story
            .map(
              (part, index) =>
                `${chalk.cyan(String(index + 1).padStart(2, "0"))}  ${chalk.bold(part.title)}\n    ${part.text}`,
            )
            .join("\n\n"),
          "magenta",
        ),
      );
    }
    if (view === "interests") {
      console.log(
        panel(
          "BEYOND THE TERMINAL",
          interests
            .map(
              ([name, detail]) =>
                `${chalk.cyan("◇")} ${chalk.bold(name.padEnd(17))} ${detail}`,
            )
            .join("\n\n"),
          "magenta",
        ),
      );
    }
    if (view === "highlights") {
      console.log(
        panel(
          "HIGHLIGHTS",
          highlights.map((item) => `${chalk.yellow("✦")} ${item}`).join("\n\n"),
          "yellow",
        ),
      );
    }
    await pause();
  }
}

async function projectMenu() {
  while (true) {
    header(true);
    const index = await select({
      message: `Selected work (${projects.length} projects)`,
      pageSize: 12,
      choices: [
        ...projects.map((project, i) => ({
          name: project.name,
          value: i,
          description: project.description,
        })),
        new Separator(),
        backChoice,
      ],
    });
    if (index === null) return;
    const project = projects[index];

    let viewing = true;
    while (viewing) {
      header(true);
      console.log(
        panel(
          project.name.toUpperCase(),
          [
            project.description,
            "",
            chalk.bold("STACK"),
            chalk.cyan(project.tech.join(" · ")),
            "",
            project.website
              ? `${chalk.dim("Website")}  ${project.website}`
              : null,
            project.source
              ? `${chalk.dim("Source ")}  ${project.source}`
              : null,
            project.article
              ? `${chalk.dim("Article")}  ${project.article}`
              : null,
          ]
            .filter(Boolean)
            .join("\n"),
        ),
      );

      const action = await select({
        message: "Project actions",
        choices: [
          project.website && {
            name: "Open live project ↗",
            value: ["project", project.website],
          },
          project.source && {
            name: "Open source ↗",
            value: ["source", project.source],
          },
          project.article && {
            name: "Read article ↗",
            value: ["article", project.article],
          },
          new Separator(),
          { name: "← Project list", value: null },
        ].filter(Boolean),
      });
      if (!action) viewing = false;
      else {
        await openUrl(action[0], action[1]);
        await pause("Press enter to continue");
      }
    }
  }
}

async function experienceMenu() {
  while (true) {
    header(true);
    const index = await select({
      message: `Experience (${experience.length} roles)`,
      pageSize: 9,
      choices: [
        ...experience.map((job, i) => ({
          name: `${job.company} — ${job.role}`,
          value: i,
          description: job.period,
        })),
        new Separator(),
        backChoice,
      ],
    });
    if (index === null) return;
    const job = experience[index];
    header(true);
    console.log(
      panel(
        job.company.toUpperCase(),
        [
          chalk.bold(job.role),
          `${chalk.cyan(job.period)}  ${chalk.dim(`· ${job.location}`)}`,
          "",
          ...job.bullets.map((bullet) => `${chalk.green("✓")} ${bullet}`),
          "",
          chalk.dim(job.companyUrl),
        ].join("\n\n"),
        "green",
      ),
    );
    const action = await select({
      message: "What next?",
      choices: [
        { name: "Open company website ↗", value: "open" },
        { name: "← Experience list", value: "back" },
      ],
    });
    if (action === "open") {
      await openUrl(job.company, job.companyUrl);
      await pause("Press enter to continue");
    }
  }
}

async function skillsMenu() {
  while (true) {
    header(true);
    const index = await select({
      message: "Toolbox by discipline",
      choices: [
        ...skillGroups.map(([group, skills], i) => ({
          name: group,
          value: i,
          description: `${skills.length} technologies`,
        })),
        new Separator(),
        backChoice,
      ],
    });
    if (index === null) return;
    const [group, skills] = skillGroups[index];
    header(true);
    console.log(
      panel(
        group.toUpperCase(),
        skills
          .map(
            (skill, i) =>
              `${chalk.cyan(String(i + 1).padStart(2, "0"))}  ${skill}`,
          )
          .join("\n"),
        "blue",
      ),
    );
    await pause();
  }
}

async function certificationsMenu() {
  while (true) {
    header(true);
    const index = await select({
      message: `Certifications (${certifications.length})`,
      pageSize: 12,
      choices: [
        ...certifications.map((certificate, i) => ({
          name: certificate.name,
          value: i,
          description: `${certificate.issuer} · ${certificate.issued}`,
        })),
        new Separator(),
        backChoice,
      ],
    });
    if (index === null) return;
    const certificate = certifications[index];
    header(true);
    console.log(
      panel(
        "CERTIFICATE",
        [
          chalk.bold(certificate.name),
          "",
          `${chalk.cyan("ISSUER").padEnd(17)} ${certificate.issuer}`,
          `${chalk.cyan("ISSUED").padEnd(17)} ${certificate.issued}`,
          `${chalk.cyan("SKILLS").padEnd(17)} ${certificate.skills.join(" · ")}`,
          "",
          chalk.underline(certificate.url),
        ].join("\n"),
        "yellow",
      ),
    );
    const shouldOpen = await confirm({
      message: "Open this credential in your browser?",
      default: false,
    });
    if (shouldOpen) await openUrl("credential", certificate.url);
    await pause();
  }
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": `gautam-cli/${version}` },
    signal: AbortSignal.timeout(7000),
  });
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}

async function githubView() {
  header(true);
  process.stdout.write(chalk.dim("  Fetching live GitHub activity… "));
  try {
    const [user, repos] = await Promise.all([
      fetchJson("https://api.github.com/users/GautamVhavle"),
      fetchJson(
        "https://api.github.com/users/GautamVhavle/repos?sort=updated&per_page=50",
      ),
    ]);
    const top = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);
    process.stdout.write(chalk.green("done\n"));
    console.log(
      panel(
        "GITHUB / LIVE",
        [
          `${chalk.bold(user.name || user.login)}  ${chalk.dim(`@${user.login}`)}`,
          chalk.gray(user.bio || profile.bio),
          "",
          `${chalk.cyan(user.public_repos)} repos   ${chalk.cyan(user.followers)} followers   ${chalk.cyan(user.following)} following`,
          "",
          chalk.bold("TOP REPOSITORIES"),
          ...top.map(
            (repo) =>
              `${chalk.cyan("◇")} ${chalk.bold(repo.name)} ${chalk.yellow(`★ ${repo.stargazers_count}`)}\n  ${chalk.dim(repo.description || "Open-source project")}`,
          ),
          "",
          chalk.underline.cyan(user.html_url),
        ].join("\n"),
      ),
    );
  } catch (error) {
    process.stdout.write(chalk.yellow("offline\n"));
    console.log(
      panel(
        "GITHUB",
        `Live data is unavailable: ${error.message}\n\n${profile.links.github}`,
        "yellow",
      ),
    );
  }
  const shouldOpen = await confirm({
    message: "Open GitHub profile?",
    default: false,
  });
  if (shouldOpen) await openUrl("GitHub", profile.links.github);
  await pause();
}

async function blogsView() {
  header(true);
  process.stdout.write(chalk.dim("  Fetching latest DEV articles… "));
  try {
    const articles = await fetchJson(
      "https://dev.to/api/articles?username=gautamvhavle&per_page=10",
    );
    process.stdout.write(chalk.green("done\n"));
    if (!articles.length) throw new Error("No published articles returned");
    const index = await select({
      message: "Latest writing",
      pageSize: 10,
      choices: [
        ...articles.map((article, i) => ({
          name: article.title,
          value: i,
          description: `${article.reading_time_minutes} min · ${article.public_reactions_count} reactions`,
        })),
        new Separator(),
        backChoice,
      ],
    });
    if (index !== null) {
      const article = articles[index];
      header(true);
      console.log(
        panel(
          "ARTICLE",
          [
            chalk.bold(article.title),
            "",
            article.description || "Published on DEV Community",
            "",
            chalk.cyan(article.tag_list.join(" · ")),
            `${article.reading_time_minutes} min read · ${article.public_reactions_count} reactions · ${article.comments_count} comments`,
            "",
            chalk.underline(article.url),
          ].join("\n"),
          "magenta",
        ),
      );
      const shouldOpen = await confirm({
        message: "Read this article in your browser?",
        default: false,
      });
      if (shouldOpen) await openUrl("article", article.url);
      await pause();
    }
  } catch (error) {
    if (isCancelled(error)) throw error;
    process.stdout.write(chalk.yellow("offline\n"));
    console.log(
      panel(
        "WRITING",
        `Articles are unavailable: ${error.message}\n\n${profile.links.dev}`,
        "yellow",
      ),
    );
    await pause();
  }
}

async function liveMenu() {
  while (true) {
    header(true);
    const action = await select({
      message: "Live from the web",
      choices: [
        {
          name: "GitHub activity",
          value: "github",
          description: "Stats and top repositories",
        },
        {
          name: "Latest writing",
          value: "blogs",
          description: "Recent DEV Community articles",
        },
        backChoice,
      ],
    });
    if (!action) return;
    if (action === "github") await githubView();
    if (action === "blogs") await blogsView();
  }
}

async function connectMenu() {
  const links = [
    ["Email", `mailto:${profile.email}`],
    ["Book a call", profile.links.calendar],
    ["LinkedIn", profile.links.linkedin],
    ["GitHub", profile.links.github],
    ["X", profile.links.x],
    ["Instagram", profile.links.instagram],
    ["YouTube", profile.links.youtube],
    ["DEV Community", profile.links.dev],
    ["Spotify", profile.links.spotify],
  ];
  while (true) {
    header(true);
    const index = await select({
      message: "Connect with Gautam",
      choices: [
        ...links.map(([name, url], i) => ({
          name,
          value: i,
          description: url,
        })),
        new Separator(),
        backChoice,
      ],
    });
    if (index === null) return;
    await openUrl(links[index][0], links[index][1]);
    await pause("Press enter to continue");
  }
}

function printHelp() {
  console.log(`${chalk.bold("gautam-cli")} — Gautam Vhavle's terminal portfolio

${chalk.bold("Usage")}
  npx gautam-cli@latest [option]

${chalk.bold("Options")}
  -h, --help       Show this help message
  -v, --version    Print the installed version
  --json           Print a machine-readable portfolio summary
  --no-clear       Keep previous screens in terminal history

Run without options to start the interactive portfolio.`);
}

function printJson() {
  console.log(
    JSON.stringify(
      {
        profile,
        projects: projects.map(
          ({ name, description, tech, website, source }) => ({
            name,
            description,
            tech,
            website,
            source,
          }),
        ),
        experience: experience.map(({ company, role, period, location }) => ({
          company,
          role,
          period,
          location,
        })),
        skills: Object.fromEntries(skillGroups),
        certifications: certifications.map(({ name, issuer, issued, url }) => ({
          name,
          issuer,
          issued,
          url,
        })),
      },
      null,
      2,
    ),
  );
}

async function mainMenu() {
  while (true) {
    header();
    const action = await select({
      message: "What would you like to explore?",
      loop: false,
      pageSize: 14,
      choices: [
        {
          name: "About",
          value: "about",
          description: "Profile, story, interests, and highlights",
        },
        {
          name: "Projects",
          value: "projects",
          description: `${projects.length} products with links and source`,
        },
        {
          name: "Experience",
          value: "experience",
          description: `${experience.length} roles with full details`,
        },
        {
          name: "Toolbox",
          value: "skills",
          description: `${skillGroups.reduce((total, [, items]) => total + items.length, 0)} technologies by discipline`,
        },
        {
          name: "Certifications",
          value: "certifications",
          description: `${certifications.length} verified credentials`,
        },
        {
          name: "Live",
          value: "live",
          description: "GitHub activity and latest writing",
        },
        {
          name: "Connect",
          value: "connect",
          description: "Email, calendar, and every social link",
        },
        new Separator(),
        {
          name: "Open web portfolio ↗",
          value: "portfolio",
          description: profile.links.portfolio,
        },
        {
          name: "Open résumé ↗",
          value: "resume",
          description: "View the latest résumé",
        },
        new Separator(),
        { name: "Exit", value: "exit" },
      ],
    });
    if (action === "about") await aboutMenu();
    if (action === "projects") await projectMenu();
    if (action === "experience") await experienceMenu();
    if (action === "skills") await skillsMenu();
    if (action === "certifications") await certificationsMenu();
    if (action === "live") await liveMenu();
    if (action === "connect") await connectMenu();
    if (action === "portfolio") {
      await openUrl("portfolio", profile.links.portfolio);
      await pause("Press enter to continue");
    }
    if (action === "resume") {
      await openUrl("résumé", profile.links.resume);
      await pause("Press enter to continue");
    }
    if (action === "exit") return;
  }
}

async function run() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.includes("-h")) return printHelp();
  if (args.includes("--version") || args.includes("-v"))
    return console.log(version);
  if (args.includes("--json")) return printJson();
  await mainMenu();
  console.log(accent("\n  Thanks for stopping by — keep building.\n"));
}

run().catch((error) => {
  const cancelled = isCancelled(error);
  if (!cancelled)
    console.error(chalk.red("Something went wrong:"), error.message);
  process.exit(cancelled ? 0 : 1);
});
