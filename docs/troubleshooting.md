# Troubleshooting

## Module errors

Run `npm ci` from the repository root and confirm the supported Node.js version.

## TypeScript changes do not run

Compile `game.ts` using the project `tsconfig.json`, then run the generated JavaScript file.

## Prompt or color issues

Use a modern terminal with interactive input support. Test cancellation and resize behavior, and verify that terminal color support is not disabling meaningful output.
