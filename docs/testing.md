# 🧪 Adventure Game Testing Guide

This document explains how to validate the CLI while the repository has no automated game test suite.

## Current test status

The `npm test` script in `package.json` is a placeholder that exits with an error. It is not a passing test suite. The project currently depends on manual playtesting plus syntax and TypeScript compiler checks.

## Useful commands

```bash
npm ci
node --check game.js
npx --yes --package typescript tsc --noEmit
```

Inspect `tsconfig.json` before emitting JavaScript. Confirm that the compiler output location will not unexpectedly overwrite the committed entrypoint.

## Manual test matrix

| Scenario | What to verify |
|---|---|
| Player name | Input is accepted and displayed correctly |
| Each opponent | Each menu choice enters a defined flow |
| Attack outcome A | Correct participant loses fuel |
| Attack outcome B | Opposite participant loses fuel |
| Repeated attacks | Fuel decreases in the expected increments |
| Fuel reaches zero | Correct win/loss message and exit |
| Potion action | Player fuel is actually restored |
| Escape action | The game exits or returns to a documented state |
| Ctrl+C | Process exits without confusing output |
| No colour support | Messages remain understandable |
| Long player name | Output remains readable |

## TypeScript and JavaScript parity

The repository contains two entrypoints. For each code change:
1. Identify the source of truth.
2. Update the corresponding implementation.
3. Run syntax and type checks.
4. Manually test equivalent scenarios in both entrypoints.
5. Compare prompts, outcomes, and exit behaviour.

## Future unit tests

The first useful tests should target logic that does not require a terminal:
- Fuel decrease.
- Fuel restore.
- Attack outcome selection.
- Win/loss detection.
- Invalid action handling.
- Turn state transition.

Inject random outcomes in tests rather than waiting for a random branch. Prompt integration should be tested separately with a mockable input layer.

## Validation checklist

- [ ] Clean dependency installation succeeds.
- [ ] JavaScript syntax check passes.
- [ ] TypeScript no-emit check passes.
- [ ] Every opponent option has been tested.
- [ ] Every action has been tested.
- [ ] Both random outcomes have been exercised.
- [ ] End states are correct.
- [ ] Both entrypoints behave consistently.
- [ ] No secrets or private data were used.
