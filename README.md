# ⚔️ Adventure Game

<p align="center">
  <strong>A terminal-based adventure and battle simulation built with Node.js, TypeScript, Inquirer, and Chalk.</strong>
</p>

<p align="center">
  Choose a player name, select an opponent, and navigate a turn-based command-line encounter with fuel-style health, attacks, and potion actions.
</p>

<p align="center">
  <a href="https://github.com/Brajesh31/Adventure-Game">Repository</a> ·
  <a href="https://github.com/Brajesh31/Adventure-Game/issues">Issues</a> ·
  <a href="docs/README.md">Documentation</a> ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

> [!NOTE]
> This is a local educational terminal game. It is not a networked multiplayer game and does not save game progress between runs.

---

## 📚 Table of Contents

1. [🌟 Project Overview](#-project-overview)
2. [🎮 Gameplay Overview](#-gameplay-overview)
3. [🧩 Game Components](#-game-components)
4. [🧠 Current Game Logic](#-current-game-logic)
5. [🧰 Technology Stack](#-technology-stack)
6. [🗂️ Repository Structure](#️-repository-structure)
7. [🖥️ Requirements](#️-requirements)
8. [🚀 Installation](#-installation)
9. [▶️ Run the Game](#️-run-the-game)
10. [🔷 TypeScript Development](#-typescript-development)
11. [🧪 Testing and Validation](#-testing-and-validation)
12. [🎨 Terminal Experience](#-terminal-experience)
13. [🔐 Security and Safe Usage](#-security-and-safe-usage)
14. [⚠️ Known Limitations](#️-known-limitations)
15. [🧯 Troubleshooting](#-troubleshooting)
16. [🤝 Contributing](#-contributing)
17. [🗺️ Roadmap](#️-roadmap)
18. [📖 Documentation](#-documentation)
19. [📄 License](#-license)

---

## 🌟 Project Overview

**Adventure Game** is an interactive command-line game written for Node.js. It uses Inquirer to collect player choices and Chalk to style terminal output. Its game state is represented by simple player and opponent objects with a `fuel` value that acts as a health-like score.

The repository contains:
- `game.ts`, the TypeScript implementation used as the primary source for development.
- `game.js`, a JavaScript implementation used to launch the game.
- `package.json` and `package-lock.json`, the npm dependency manifest and lockfile.
- `tsconfig.json`, the TypeScript compiler configuration.

There is no browser UI, database, backend service, persistent save system, or online opponent connection in the current implementation.

## 🎮 Gameplay Overview

The current interaction begins by asking for a player name. The player then selects an opponent from the available list:

- Zombie
- Monsters
- Skeleton

The game creates player and opponent instances with an initial fuel value of 100. The encounter then uses an interactive choice prompt and random outcome logic. The available actions include an attack, a potion-like option, and an escape/run option in the visible Skeleton branch.

The code is an early learning implementation. Not all opponent branches and actions are fully consistent or complete. Read the source and the [gameplay flow guide](docs/gameplay.md) before assuming every choice works identically.

## 🧩 Game Components

### Player

The player class stores:
- A name supplied by the user.
- A fuel value initialized to 100.
- A method that decreases fuel by 25.
- A method that restores fuel to 100.

### Opponent

The opponent class follows a similar structure:
- An opponent name selected from the menu.
- A fuel value initialized to 100.
- A method that decreases fuel by 25.
- A method that restores fuel to 100.

### Interactive prompts

Inquirer is used for input and list selection. The prompt flow is synchronous from the player's perspective, while the implementation uses asynchronous `await` calls to receive answers.

### Terminal styling

Chalk adds colour and emphasis to selected messages. Styling should improve readability, not be the only way a win, loss, or important state is communicated.

## 🧠 Current Game Logic

The source currently follows this high-level sequence:

1. Ask for a player name.
2. Ask the player to select an opponent.
3. Create player and opponent objects.
4. Enter a repeated decision flow.
5. Ask for an action in the implemented opponent branch.
6. For an attack, generate a random outcome.
7. Reduce one participant's fuel by 25 depending on the random result.
8. Display the current fuel values.
9. End the process when the relevant fuel threshold reaches zero.

The exact behaviour should be checked against `game.ts` and `game.js`. These files have historically been edited independently and should be compared after every code change.

The game does not currently provide a robust, shared game engine or deterministic random number generator. This makes repeatable automated testing difficult until the random and state logic are separated.

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| TypeScript | Typed source implementation |
| JavaScript ES modules | Runnable JavaScript entrypoint |
| Inquirer | Interactive command-line prompts |
| Chalk | Coloured and emphasized terminal output |
| npm | Package installation and lockfile management |
| TypeScript compiler | Compile and validate TypeScript |

## 🗂️ Repository Structure

```text
Adventure-Game/
├── game.ts
├── game.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── .editorconfig
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       └── update-readme.yml
├── docs/
│   ├── README.md
│   ├── architecture.md
│   ├── gameplay.md
│   ├── development.md
│   ├── installation.md
│   ├── testing.md
│   ├── troubleshooting.md
│   ├── faq.md
│   └── deployment.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── MAINTAINERS.md
├── ROADMAP.md
├── SECURITY.md
└── SUPPORT.md
```

The repository may contain additional IDE or generated files. Do not treat editor metadata or installed dependencies as application source.

## 🖥️ Requirements

- Node.js 18 or newer is the documented baseline for the current project.
- npm, included with Node.js.
- A terminal that supports interactive input.
- A terminal with ANSI colour support for the intended Chalk output.

Check your versions:

```bash
node --version
npm --version
```

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Brajesh31/Adventure-Game.git
cd Adventure-Game
```

Install the exact dependency versions recorded in the lockfile:

```bash
npm ci
```

Use `npm ci` for reproducible local setup. Do not delete or regenerate the lockfile without a reason.

## ▶️ Run the Game

Launch the JavaScript entrypoint:

```bash
node game.js
```

Follow the prompts in the terminal. Enter a fictional player name and choose an opponent. Use the available action menu to explore the implemented flow.

Stop a running process with `Ctrl+C` if necessary.

## 🔷 TypeScript Development

The TypeScript source is `game.ts`. The repository's `tsconfig.json` defines compilation behaviour. The package manifest currently does not declare a dedicated build script or a direct TypeScript compiler dependency.

To compile with an explicitly invoked compiler:

```bash
npx --yes --package typescript tsc --noEmit
```

To emit JavaScript according to the project's configuration:

```bash
npx --yes --package typescript tsc
```

Before running the output, inspect the compiler output path in `tsconfig.json`. Do not assume that compiling `game.ts` necessarily writes to the root `game.js` without checking the configuration.

If the emitted output is different from the committed JavaScript entrypoint, do not overwrite source files blindly. Compare the output and make the build workflow explicit.

## 🧪 Testing and Validation

The current package test script is a placeholder:

```bash
npm test
```

It exits with an error and does not execute a test suite. The repository does not currently contain a dedicated automated game test suite.

Useful checks include:

```bash
node --check game.js
npx --yes --package typescript tsc --noEmit
```

Manual playtesting should cover:
- Player name input.
- Every opponent selection.
- Every available action.
- Both random attack outcomes.
- Potion behaviour.
- Escape behaviour.
- Fuel values at and below zero.
- Repeated turns and process termination.
- Terminal output with and without colour support.

See [docs/testing.md](docs/testing.md) for a fuller test matrix.

## 🎨 Terminal Experience

The game relies on an interactive terminal. If prompts fail in an IDE output panel, use a real terminal or an IDE terminal with standard input enabled.

Chalk output may appear without colour when the terminal does not advertise colour support. The game should remain understandable in plain text.

## 🔐 Security and Safe Usage

The game is a local fictional simulation. Do not enter passwords, account credentials, personal information, or other sensitive data as player names or test input.

Do not commit:
- API keys or access tokens.
- Personal information.
- Local environment files containing secrets.
- Terminal recordings containing private data.
- Generated build output unless the project intentionally tracks it.

See [SECURITY.md](SECURITY.md) for reporting guidance.

## ⚠️ Known Limitations

The current source has several areas that should be treated as unfinished:

- The package test command is only a placeholder.
- The JavaScript and TypeScript entrypoints need a verified parity check.
- Some opponent-specific branches are incomplete or differ in behaviour.
- The potion action should be reviewed to ensure the restore method is actually invoked.
- Random outcomes are embedded in interaction logic, making tests nondeterministic.
- There is no explicit, consistent game-over state shared by every branch.
- The process may terminate directly instead of returning through a clean exit flow.
- No save/load system or persistent player history exists.
- The dependency manifest lists many transitive packages as direct dependencies. This should be reviewed carefully rather than removed without checking imports and lockfile behaviour.

These are documented opportunities for code improvements, not claims that the game already handles them.

## 🧯 Troubleshooting

| Problem | Suggested check |
|---|---|
| `Cannot find package 'inquirer'` | Run `npm ci` from the repository root |
| `Cannot find package 'chalk'` | Confirm dependencies installed and lockfile is current |
| Prompts do not appear | Run in an interactive terminal with standard input |
| Colours are missing | Check terminal ANSI colour support |
| TypeScript command is unavailable | Use the documented npx compiler command |
| Compiled output is not where expected | Inspect `outDir` and `rootDir` in `tsconfig.json` |
| Game does not end as expected | Inspect the selected opponent branch and fuel threshold |
| Potion does not restore fuel | Check that `fuelIncrease()` is invoked, not merely referenced |

## 🤝 Contributing

Contributions are welcome when they improve game correctness, readability, accessibility of terminal output, testability, or documentation.

Start with [CONTRIBUTING.md](CONTRIBUTING.md), review the [roadmap](ROADMAP.md), and describe the behaviour you changed. Keep TypeScript and JavaScript implementations aligned unless a deliberate migration is documented.

## 🗺️ Roadmap

Potential improvements include:
- A shared game state model.
- Consistent opponent and action branches.
- Deterministic random outcomes for testing.
- Real unit tests.
- Graceful cancellation and exit handling.
- Clear rules for win, loss, fuel, and potion mechanics.
- Cleaner dependency declarations.
- A documented TypeScript build command.

See [ROADMAP.md](ROADMAP.md).

## 📖 Documentation

| Document | Description |
|---|---|
| [Documentation index](docs/README.md) | All technical guides |
| [Gameplay flow](docs/gameplay.md) | Turns, actions, fuel, and outcomes |
| [Architecture](docs/architecture.md) | Source files and responsibilities |
| [API scope](docs/api.md) | Current terminal interface and absence of an HTTP API |
| [Data and storage](docs/database.md) | In-memory state and absence of persistent storage |
| [Installation](docs/installation.md) | Requirements and dependency setup |
| [Development](docs/development.md) | Editing and compiling the project |
| [Testing](docs/testing.md) | Validation and manual scenarios |
| [Troubleshooting](docs/troubleshooting.md) | Common runtime issues |
| [FAQ](docs/faq.md) | Questions about the game |
| [Deployment](docs/deployment.md) | Local distribution and execution |
| [Contributing](CONTRIBUTING.md) | Contribution expectations |
| [Maintainer guide](MAINTAINERS.md) | Releases, dependency and repository hygiene |
| [Security](SECURITY.md) | Security reporting |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Community expectations |
| [Support](SUPPORT.md) | Help and issue reporting |
| [Changelog](CHANGELOG.md) | Verified changes |

## 📄 License

This repository is distributed under the MIT License. See [LICENSE](LICENSE) for the full text.

---

**Maintained by Brajesh Kumar** · [GitHub](https://github.com/Brajesh31)

Last updated: 2026-11-16 01:42 UTC
