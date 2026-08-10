<div align="center">

# `gautam-cli`

### Gautam Vhavle's portfolio—built for your terminal.

[![npm version](https://img.shields.io/npm/v/gautam-cli?style=flat-square&color=a78bfa)](https://www.npmjs.com/package/gautam-cli)
[![npm downloads](https://img.shields.io/npm/dm/gautam-cli?style=flat-square&color=22d3ee)](https://www.npmjs.com/package/gautam-cli)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A518-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-f5c542?style=flat-square)](LICENSE)

```text
   ██████╗ ██╗   ██╗
  ██╔════╝ ██║   ██║
  ██║  ███╗██║   ██║
  ██║   ██║╚██╗ ██╔╝
  ╚██████╔╝ ╚████╔╝
   ╚═════╝   ╚═══╝
```

One command. No global installation.

```bash
npx gautam-cli@latest
```

</div>

## What is this?

An interactive command-line portfolio for [Gautam Vhavle](https://gautamvhavle.vercel.app)—software engineer, patent holder, and builder working across full-stack products, generative AI, and IoT.

Navigate with your arrow keys to explore:

- Selected products and open-source projects
- Engineering experience and career timeline
- Languages, frameworks, AI tools, infrastructure, and hardware
- Career highlights and contact links
- Live GitHub profile statistics and top repositories
- One-key access to the web portfolio and résumé

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

## Preview

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

## Built with

- [`@inquirer/prompts`](https://github.com/SBoudrias/Inquirer.js) for keyboard navigation
- [`chalk`](https://github.com/chalk/chalk) and [`gradient-string`](https://github.com/bokub/gradient-string) for terminal color
- [`boxen`](https://github.com/sindresorhus/boxen) for responsive panels
- [`open`](https://github.com/sindresorhus/open) for portfolio and résumé shortcuts

Live GitHub data comes from GitHub's public API. If the API or network is unavailable, the CLI falls back cleanly to Gautam's profile link.

## Publishing

Maintainers can publish a new release with:

```bash
npm login
npm version patch
npm publish --access public
git push --follow-tags
```

## Connect

- [Portfolio](https://gautamvhavle.vercel.app)
- [GitHub](https://github.com/GautamVhavle)
- [LinkedIn](https://linkedin.com/in/gautamvhavle)
- [Book a call](https://cal.com/gautamvhavle/30min)
- [Email](mailto:gautamvhavle@gmail.com)

## License

[MIT](LICENSE) © 2026 Gautam Vhavle
