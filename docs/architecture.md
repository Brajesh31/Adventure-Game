# Architecture

Adventure Game is a small CLI application. `game.ts` is the authored TypeScript source, `game.js` is the runnable JavaScript entrypoint or compiled output, and `package.json` defines the terminal dependencies.

Inquirer manages interactive prompts, Chalk formats terminal output, and Node.js provides the runtime. There is no database, HTTP server, or persistent service boundary.
