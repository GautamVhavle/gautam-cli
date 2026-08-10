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

- Selected products and open-source projects
- Engineering experience and career timeline
- Languages, frameworks, AI tools, infrastructure, and hardware
- Career highlights and contact links
- Live GitHub profile statistics and top repositories
- One-key access to the web portfolio and résumé

| View              | What you will find                                                 |
| ----------------- | ------------------------------------------------------------------ |
| **About**         | A concise introduction, current focus, and location                |
| **Selected work** | Five shipped products with descriptions, stacks, and links         |
| **Experience**    | A career timeline from embedded systems to production GenAI        |
| **Toolbox**       | Languages, product stack, AI tooling, infrastructure, and hardware |
| **Highlights**    | Patents, open source, writing, and multidisciplinary engineering   |
| **GitHub — live** | Current public stats and top repositories from the GitHub API      |
| **Contact**       | Email, social links, and a direct calendar link                    |

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
❯ About                  The short version
  Selected work          Products I have shipped
  Experience             My engineering journey
  Toolbox                Technologies I build with
  Highlights             A few things I am proud of
  GitHub — live          Profile and top repositories
  ─────────────────────────────────────────────────
  Open portfolio ↗       gautamvhavle.vercel.app
  Open résumé ↗          View in your browser
  Contact                Say hello or book a call
```

The interface adapts to terminal width, uses Unicode-safe visuals, and degrades gracefully when GitHub's API or the network is unavailable.

## Design principles

- **Zero setup** — one `npx` command is enough.
- **Useful, not gimmicky** — every screen contains real portfolio information.
- **Resilient** — network-backed features include a clean offline fallback.
- **Portable** — works anywhere Node.js 18+ runs.
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
      ├── interactive keyboard menu
      ├── static portfolio content
      ├── public GitHub API ──► live stats + top repos
      └── system browser ─────► portfolio / résumé
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
