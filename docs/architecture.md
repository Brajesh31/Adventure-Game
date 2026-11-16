# 🏗️ Adventure Game Architecture

## Runtime boundary

Adventure Game is a local, single-process command-line program. Node.js executes the JavaScript module and owns process lifecycle and terminal streams.

## Main files

| File | Responsibility |
|---|---|
| `game.ts` | Typed game implementation |
| `game.js` | JavaScript entrypoint |
| `package.json` | npm metadata, scripts, and dependencies |
| `package-lock.json` | Locked dependency graph |
| `tsconfig.json` | TypeScript compiler options |

## Runtime dependencies

- Inquirer collects the player name, opponent selection, and action choices.
- Chalk styles selected console messages.
- Node.js provides the runtime, standard input/output, module loading, and process control.

## State model

The current implementation defines player and opponent classes. Each instance stores a name and a numeric fuel value initialized to 100. Methods reduce fuel by 25 or restore it to 100.

The current design keeps much of the logic inside the interactive prompt loop. A cleaner future architecture would separate:
1. Domain state and rules.
2. Random outcome selection.
3. Prompt collection.
4. Terminal output.
5. Process exit and cancellation handling.

## Data flow

```text
Terminal input
   |
   v
Inquirer prompts
   |
   v
Player / opponent instances
   |
   v
Action branch and random outcome
   |
   v
Fuel update and result message
   |
   v
Next turn or process exit
```

## Important limitations

There is no API server, database, persistent save data, user authentication, or online multiplayer. TypeScript and JavaScript entrypoints should be compared after changes to ensure they remain behaviourally consistent.
