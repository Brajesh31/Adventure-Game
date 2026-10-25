# Adventure Game

Adventure Game is a terminal-based TypeScript/JavaScript project that uses Inquirer and Chalk to provide an interactive command-line experience.

## Requirements

- Node.js 18 or newer
- npm
- TypeScript tooling for compiling `game.ts`

## Setup

```powershell
npm ci
```

The repository contains `game.ts` as the TypeScript source and `game.js` as the JavaScript entrypoint or compiled counterpart. Inspect `tsconfig.json` before compiling so output follows the project configuration.

## Run

Use the JavaScript entrypoint with Node:

```powershell
node game.js
```

When changing the TypeScript source, compile it with the configured TypeScript compiler and then run the generated JavaScript:

```powershell
npx --package typescript tsc
node game.js
```

## Development

Keep prompts resilient to cancellation and invalid input. Do not print secrets or environment contents. Test the main path, cancellation, unexpected input, and terminal output in a real shell.

The package currently has no automated test suite; manual smoke testing is required until tests are added.

## Ownership and license

Maintained by Brajesh Kumar (`brajesh31`). See [LICENSE](LICENSE) and the contribution policies for project expectations.

Last updated: 2026-10-25 10:50 UTC
