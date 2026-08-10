# Contributing

Thanks for your interest in improving `gautam-cli`.

## Before you start

- Search existing issues and pull requests to avoid duplicate work.
- Open an issue before making a large behavioral or design change.
- Keep changes focused; this project intentionally has a small dependency and feature surface.
- Never add analytics, tracking, secrets, or private portfolio information.

## Development

```bash
git clone https://github.com/GautamVhavle/gautam-cli.git
cd gautam-cli
npm install
npm start
```

Before opening a pull request:

```bash
npm test
npm pack --dry-run
```

Confirm that menu navigation, narrow-terminal rendering, browser shortcuts, and the GitHub offline fallback still behave correctly.

## Pull requests

- Explain what changed and why.
- Keep the README and CLI content synchronized when portfolio information changes.
- Do not commit `node_modules`, package archives, credentials, or environment files.
- Use clear commit messages such as `fix: handle narrow terminal output`.

By contributing, you agree that your work will be released under the [MIT License](LICENSE).
