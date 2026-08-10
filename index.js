#!/usr/bin/env node

import { input, select, Separator } from "@inquirer/prompts";
import boxen from "boxen";
import chalk from "chalk";
import gradient from "gradient-string";
import open from "open";

const PROFILE = {
  name: "Gautam Vhavle",
  headline: "Full-Stack · GenAI · IoT",
  location: "Bengaluru, Karnataka, India",
  email: "gautamvhavle@gmail.com",
  portfolio: "https://gautamvhavle.vercel.app",
  github: "https://github.com/GautamVhavle",
  linkedin: "https://linkedin.com/in/gautamvhavle",
  x: "https://x.com/gautamvvvv",
  calendar: "https://cal.com/gautamvhavle/30min",
  resume:
    "https://drive.google.com/file/d/11226IywvimrBUydAPa9DVyvfE1thKh2b/view",
};

const PROJECTS = [
  {
    name: "LearnerVerse",
    description: "Turn any playlist into an AI-native, structured course.",
    stack: "Python · FastAPI · LangChain · React · Supabase",
    url: "https://learnerverse.xyz",
  },
  {
    name: "CatGPT Gateway",
    description: "An OpenAI-compatible API powered by ChatGPT or Claude WebUI.",
    stack: "Python · FastAPI · Playwright · Docker",
    url: "https://github.com/GautamVhavle/CatGPT-Gateway",
  },
  {
    name: "BrowserLLM",
    description: "Run 100+ open-source LLMs privately in your browser.",
    stack: "WebGPU · WebLLM · React · TypeScript",
    url: "https://browserllm.vercel.app",
  },
  {
    name: "Universal JSON Agent MCP",
    description:
      "Explore large JSON files through natural language and MCP tools.",
    stack: "Python · MCP · LangChain · Langfuse",
    url: "https://github.com/GautamVhavle/universal-json-agent",
  },
  {
    name: "Ventory",
    description: "Simple inventory management software for growing MSMEs.",
    stack: "React · FastAPI · Supabase · Docker",
    url: "https://ventory.in",
  },
];

const EXPERIENCE = [
  {
    company: "Siemens",
    role: "Graduate Engineer Trainee",
    period: "Apr 2025 — Present",
    location: "Bengaluru",
    highlight:
      "Building AI-assisted cyber threat and risk assessment workflows for industrial applications.",
  },
  {
    company: "Brand Context",
    role: "IoT Developer Intern",
    period: "Dec 2024 — Mar 2025",
    location: "Remote",
    highlight:
      "Prototyped an AI-driven modular bot for real-time manufacturing updates and monitoring.",
  },
  {
    company: "GRIG Technologies",
    role: "Full Stack IoT Developer",
    period: "Aug 2023 — Jan 2025",
    location: "Pune",
    highlight:
      "Built business software, maintained CI/CD, and led R&D for a Raspberry Pi kiosk.",
  },
  {
    company: "Golain",
    role: "IoT Developer Intern",
    period: "Jun 2024 — Aug 2024",
    location: "Remote",
    highlight:
      "Developed Espressif SDK integrations and a TensorFlow Lite vision door-lock prototype.",
  },
  {
    company: "E4A Solutions",
    role: "Embedded Developer Intern",
    period: "Apr 2023 — Jul 2023",
    location: "Mumbai",
    highlight:
      "Created a Thread and MQTT-based hospital alert system with NRF52 and Raspberry Pi.",
  },
];

const ACCENT = gradient(["#a78bfa", "#22d3ee"]);
const width = Math.min(Math.max(process.stdout.columns || 80, 48), 88);

function panel(title, content, borderColor = "cyan") {
  return boxen(content, {
    title: chalk.bold(` ${title} `),
    titleAlignment: "left",
    width,
    padding: 1,
    margin: { top: 1, bottom: 1, left: 0, right: 0 },
    borderStyle: "round",
    borderColor,
  });
}

function clearAndHeader(compact = false) {
  console.clear();

  if (compact) {
    console.log(ACCENT("  GV / TERMINAL PORTFOLIO"));
  } else {
    const mark = [
      "",
      "   ██████╗ ██╗   ██╗",
      "  ██╔════╝ ██║   ██║",
      "  ██║  ███╗██║   ██║",
      "  ██║   ██║╚██╗ ██╔╝",
      "  ╚██████╔╝ ╚████╔╝ ",
      "   ╚═════╝   ╚═══╝  ",
    ].join("\n");
    console.log(ACCENT(mark));
    console.log(chalk.bold.white(`  ${PROFILE.name.toUpperCase()}`));
  }

  console.log(
    chalk.gray(`  ${PROFILE.headline}`) +
      chalk.green("  ● ") +
      chalk.dim("Available for interesting work\n"),
  );
}

async function pause() {
  await input({ message: chalk.dim("Press enter to return") });
}

function showAbout() {
  clearAndHeader(true);
  console.log(
    panel(
      "ABOUT",
      [
        chalk.bold("Software engineer. Patent holder. Builder at heart."),
        "",
        "I build intelligent systems that turn emerging technology into",
        "products people can actually use — from production GenAI workflows",
        "to connected hardware and full-stack platforms.",
        "",
        `${chalk.cyan("⌁")}  ${PROFILE.location}`,
        `${chalk.cyan("↗")}  Engineering GenAI solutions at Siemens`,
        `${chalk.cyan("◷")}  IST (UTC+05:30)`,
      ].join("\n"),
      "magenta",
    ),
  );
}

function showProjects() {
  clearAndHeader(true);
  const content = PROJECTS.map(
    (project, index) =>
      `${chalk.cyan(String(index + 1).padStart(2, "0"))}  ${chalk.bold(project.name)}\n` +
      `    ${project.description}\n` +
      `    ${chalk.dim(project.stack)}\n` +
      `    ${chalk.underline.cyan(project.url)}`,
  ).join("\n\n");
  console.log(panel("SELECTED WORK", content));
}

function showExperience() {
  clearAndHeader(true);
  const content = EXPERIENCE.map(
    (item, index) =>
      `${index === 0 ? chalk.green("●") : chalk.dim("○")}  ${chalk.bold(item.company)}  ${chalk.dim(`· ${item.location}`)}\n` +
      `   ${chalk.cyan(item.role)}  ${chalk.dim(item.period)}\n` +
      `   ${item.highlight}`,
  ).join("\n\n");
  console.log(panel("EXPERIENCE", content, "green"));
}

function showStack() {
  clearAndHeader(true);
  const groups = [
    ["LANGUAGES", "Python · TypeScript · JavaScript · C++ · Bash"],
    ["PRODUCT", "React · Vite · FastAPI · PostgreSQL · Supabase"],
    ["INTELLIGENCE", "LangChain · LangGraph · LlamaIndex · MCP · WebLLM"],
    ["INFRA", "Docker · Kubernetes · Helm · GitHub Actions · n8n"],
    ["HARDWARE", "Raspberry Pi · Espressif · MQTT · Embedded Linux"],
  ];
  console.log(
    panel(
      "TOOLBOX",
      groups
        .map(
          ([label, value]) =>
            `${chalk.hex("#a78bfa").bold(label.padEnd(14))} ${value}`,
        )
        .join("\n\n"),
      "blue",
    ),
  );
}

function showHighlights() {
  clearAndHeader(true);
  console.log(
    panel(
      "HIGHLIGHTS",
      [
        `${chalk.yellow("✦")} Patent holder and product-focused engineer`,
        `${chalk.yellow("✦")} Production GenAI engineering at Siemens`,
        `${chalk.yellow("✦")} Built across AI, full-stack, DevOps, and embedded systems`,
        `${chalk.yellow("✦")} Shipped developer tools, EdTech, IoT, and business platforms`,
        `${chalk.yellow("✦")} Open-source builder and technical writer`,
      ].join("\n\n"),
      "yellow",
    ),
  );
}

async function showGitHub() {
  clearAndHeader(true);
  process.stdout.write(chalk.dim("  Fetching live GitHub activity… "));
  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/GautamVhavle", {
        headers: { "User-Agent": "gautam-cli" },
      }),
      fetch(
        "https://api.github.com/users/GautamVhavle/repos?sort=updated&per_page=50",
        { headers: { "User-Agent": "gautam-cli" } },
      ),
    ]);
    if (!profileResponse.ok || !reposResponse.ok)
      throw new Error("GitHub API unavailable");

    const profile = await profileResponse.json();
    const repos = (await reposResponse.json())
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);

    process.stdout.write(chalk.green("done\n"));
    const repoLines = repos.length
      ? repos
          .map(
            (repo) =>
              `${chalk.cyan("◇")} ${chalk.bold(repo.name)} ${chalk.yellow(`★ ${repo.stargazers_count}`)}\n  ${chalk.dim(repo.description || "Open-source project")}`,
          )
          .join("\n\n")
      : chalk.dim("No public repositories returned.");

    console.log(
      panel(
        "GITHUB / LIVE",
        [
          `${chalk.bold(profile.name || profile.login)}  ${chalk.dim(`@${profile.login}`)}`,
          chalk.gray(profile.bio || "Building things that ship."),
          "",
          `${chalk.cyan(profile.public_repos)} repos   ${chalk.cyan(profile.followers)} followers   ${chalk.cyan(profile.following)} following`,
          "",
          chalk.bold("TOP REPOSITORIES"),
          repoLines,
          "",
          chalk.underline.cyan(profile.html_url),
        ].join("\n"),
      ),
    );
  } catch {
    process.stdout.write(chalk.yellow("offline\n"));
    console.log(
      panel(
        "GITHUB",
        `Live data is taking a break. Visit ${chalk.underline.cyan(PROFILE.github)}`,
        "yellow",
      ),
    );
  }
}

function showContact() {
  clearAndHeader(true);
  console.log(
    panel(
      "LET'S BUILD SOMETHING",
      [
        `${chalk.cyan("EMAIL").padEnd(19)} ${PROFILE.email}`,
        `${chalk.cyan("LINKEDIN").padEnd(19)} ${PROFILE.linkedin}`,
        `${chalk.cyan("GITHUB").padEnd(19)} ${PROFILE.github}`,
        `${chalk.cyan("X").padEnd(19)} ${PROFILE.x}`,
        `${chalk.cyan("BOOK A CALL").padEnd(19)} ${PROFILE.calendar}`,
        "",
        chalk.dim("Usually replies within 24 hours."),
      ].join("\n"),
      "magenta",
    ),
  );
}

async function openLink(label, url) {
  console.log(chalk.dim(`\n  Opening ${label} in your browser…`));
  await open(url);
}

async function main() {
  let running = true;
  while (running) {
    clearAndHeader();
    const action = await select({
      message: "What would you like to explore?",
      loop: false,
      pageSize: 13,
      choices: [
        { name: "About", value: "about", description: "The short version" },
        {
          name: "Selected work",
          value: "projects",
          description: "Products I have shipped",
        },
        {
          name: "Experience",
          value: "experience",
          description: "My engineering journey",
        },
        {
          name: "Toolbox",
          value: "stack",
          description: "Technologies I build with",
        },
        {
          name: "Highlights",
          value: "highlights",
          description: "A few things I am proud of",
        },
        {
          name: "GitHub — live",
          value: "github",
          description: "Profile and top repositories",
        },
        new Separator(),
        {
          name: "Open portfolio ↗",
          value: "portfolio",
          description: PROFILE.portfolio,
        },
        {
          name: "Open résumé ↗",
          value: "resume",
          description: "View in your browser",
        },
        {
          name: "Contact",
          value: "contact",
          description: "Say hello or book a call",
        },
        new Separator(),
        { name: "Exit", value: "exit" },
      ],
    });

    if (action === "about") showAbout();
    if (action === "projects") showProjects();
    if (action === "experience") showExperience();
    if (action === "stack") showStack();
    if (action === "highlights") showHighlights();
    if (action === "github") await showGitHub();
    if (action === "contact") showContact();
    if (action === "portfolio") await openLink("portfolio", PROFILE.portfolio);
    if (action === "resume") await openLink("résumé", PROFILE.resume);
    if (action === "exit") running = false;
    else if (!["portfolio", "resume"].includes(action)) await pause();
  }

  console.log(ACCENT("\n  Thanks for stopping by — keep building.\n"));
}

main().catch((error) => {
  const cancelled = error?.name === "ExitPromptError";
  if (!cancelled)
    console.error(chalk.red("Something went wrong:"), error.message);
  process.exit(cancelled ? 0 : 1);
});
