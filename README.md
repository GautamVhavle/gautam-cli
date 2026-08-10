<div align="center">

<a href="https://www.npmjs.com/package/gautam-cli">
  <img src="https://cdn.simpleicons.org/npm/CB3837" alt="npm" width="112" />
</a>

<br />

# gautam-cli

### Gautam Vhavle's interactive portfolio—built for your terminal.

[![npm version](https://img.shields.io/npm/v/gautam-cli?style=flat-square&color=a78bfa)](https://www.npmjs.com/package/gautam-cli)
[![npm downloads](https://img.shields.io/npm/dm/gautam-cli?style=flat-square&color=22d3ee)](https://www.npmjs.com/package/gautam-cli)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A518-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-f5c542?style=flat-square)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/GautamVhavle/gautam-cli/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/GautamVhavle/gautam-cli/actions/workflows/ci.yml)

One command. No global installation.

```bash
npx gautam-cli@latest
```

[View on npm](https://www.npmjs.com/package/gautam-cli) · [Source on GitHub](https://github.com/GautamVhavle/gautam-cli) · [Web portfolio](https://gautamvhavle.vercel.app)

</div>

---

## Why a terminal portfolio?

Because a developer portfolio should feel like the person who built it. `gautam-cli` turns Gautam's work, experience, and public GitHub activity into a fast keyboard-driven experience—with no account, configuration, or permanent installation.

```bash
$ npx gautam-cli@latest
```

> [!TIP]
> Use the arrow keys to navigate, <kbd>Enter</kbd> to select, and <kbd>Ctrl</kbd> + <kbd>C</kbd> to leave at any time.

## Inside the CLI

Gautam is a software engineer, patent holder, and builder working across full-stack products, generative AI, and IoT.

Navigate with your arrow keys to explore:

- Eight projects with full stacks and working website, source, and article actions
- Five engineering roles with complete responsibilities and company links
- 46 technologies grouped across eight engineering disciplines
- Sixteen credentials with issuer, date, skills, and verification links
- Personal story, interests, career highlights, and every contact channel
- Live GitHub statistics, top repositories, and latest DEV articles
- One-key access to the web portfolio, résumé, credentials, and social profiles

| View               | What you will find                                                               |
| ------------------ | -------------------------------------------------------------------------------- |
| **About**          | Profile, origin story, interests, and career highlights                          |
| **Projects**       | Eight products with individual detail pages and contextual actions               |
| **Experience**     | Five roles from embedded systems to production GenAI, with full responsibilities |
| **Toolbox**        | 46 technologies across product, AI, infrastructure, IoT, quality, and design     |
| **Certifications** | Sixteen verified credentials with direct verification links                      |
| **Live**           | Current GitHub activity and recent DEV Community writing                         |
| **Connect**        | Email, calendar, GitHub, LinkedIn, X, Instagram, YouTube, DEV, and Spotify       |

## Run it

You only need [Node.js 18 or newer](https://nodejs.org).

```bash
npx gautam-cli@latest
```

To install it globally instead:

```bash
npm install --global gautam-cli
gautam
```

## Terminal preview

```text
? What would you like to explore?
❯ About                  Profile, story, interests, and highlights
  Projects               8 products with links and source
  Experience             5 roles with full details
  Toolbox                46 technologies by discipline
  Certifications         16 verified credentials
  Live                    GitHub activity and latest writing
  Connect                 Email, calendar, and every social link
  ─────────────────────────────────────────────────
  Open web portfolio ↗    gautamvhavle.vercel.app
  Open résumé ↗           View the latest résumé
```

Every content section supports drill-down navigation and a clear route back. Link actions open only after an explicit selection, the interface adapts to terminal width, and live data degrades gracefully when the network is unavailable.

## Command-line options

The default command starts the interactive experience, while these flags make the package useful in scripts and automation:

```bash
npx gautam-cli@latest --help
npx gautam-cli@latest --version
npx gautam-cli@latest --json
npx gautam-cli@latest --no-clear
```

| Flag              | Purpose                                               |
| ----------------- | ----------------------------------------------------- |
| `-h`, `--help`    | Show usage without starting an interactive prompt     |
| `-v`, `--version` | Print the installed package version                   |
| `--json`          | Export the portfolio summary as machine-readable JSON |
| `--no-clear`      | Preserve previous views in terminal scrollback        |

## Design principles

- **Zero setup** — one `npx` command is enough.
- **Useful, not gimmicky** — every screen contains real portfolio information.
- **Resilient** — network-backed features include a clean offline fallback.
- **Portable** — works anywhere Node.js 18+ runs.
- **Interruptible** — exits cleanly from any nested prompt with <kbd>Ctrl</kbd> + <kbd>C</kbd>.
- **Small surface area** — five focused runtime dependencies and no telemetry.

## Local development

```bash
git clone https://github.com/GautamVhavle/gautam-cli.git
cd gautam-cli
npm install
npm start
```

Validate the executable before publishing:

```bash
npm run check
npm pack --dry-run
```

## How it works

- [`@inquirer/prompts`](https://github.com/SBoudrias/Inquirer.js) for keyboard navigation
- [`chalk`](https://github.com/chalk/chalk) and [`gradient-string`](https://github.com/bokub/gradient-string) for terminal color
- [`boxen`](https://github.com/sindresorhus/boxen) for responsive panels
- [`open`](https://github.com/sindresorhus/open) for portfolio and résumé shortcuts

Live GitHub data comes from GitHub's public API. If the API or network is unavailable, the CLI falls back cleanly to Gautam's profile link.

```text
npx gautam-cli
      │
      ├── nested keyboard navigation
      ├── complete local portfolio data
      ├── GitHub API ─────────► live stats + top repos
      ├── DEV API ────────────► latest writing
      ├── JSON mode ──────────► machine-readable output
      └── system browser ─────► selected links only
```

No analytics, API keys, cookies, or user data collection.

## Contributing

Thoughtful fixes and improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. For security-related reports, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.

<details>
<summary><strong>Maintainer publishing notes</strong></summary>

## Publishing

Maintainers can publish a new release with:

```bash
npm login
npm version patch
npm publish --access public
git push --follow-tags
```

</details>

## Connect

- [Portfolio](https://gautamvhavle.vercel.app)
- [GitHub](https://github.com/GautamVhavle)
- [LinkedIn](https://linkedin.com/in/gautamvhavle)
- [Book a call](https://cal.com/gautamvhavle/30min)
- [Email](mailto:gautamvhavle@gmail.com)

## License

[MIT](LICENSE) © 2026 Gautam Vhavle

<div align="center">

Built by [Gautam Vhavle](https://gautamvhavle.vercel.app) · If you like it, consider leaving a ⭐

</div>
