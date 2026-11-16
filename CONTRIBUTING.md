# 🤝 Contributing to Adventure Game

Thank you for considering a contribution. This guide describes how to make changes that improve gameplay, correctness, terminal usability, testing, and documentation.

## Principles

- Keep the game easy to understand.
- Preserve a clear command-line interaction.
- Make player and opponent state transitions explicit.
- Keep TypeScript and JavaScript entrypoints aligned.
- Separate deterministic game rules from terminal prompts where practical.
- Document current behaviour honestly.
- Never add secrets or personal information.

## Development setup

```bash
git clone https://github.com/Brajesh31/Adventure-Game.git
cd Adventure-Game
npm ci
```

Run the JavaScript entrypoint:

```bash
node game.js
```

Validate the TypeScript source:

```bash
npx --yes --package typescript tsc --noEmit
```

## Areas for contribution

| Area | Examples |
|---|---|
| Gameplay | Consistent opponent branches and action rules |
| State | Explicit fuel, turn, and game-over state |
| Input | Validation, cancellation, graceful exit |
| Randomness | Injectable random outcome selection |
| Output | Clear plain-text and colour terminal output |
| TypeScript | Useful types and reduced unsafe assumptions |
| Testing | Unit tests for fuel, outcomes, and end states |
| Documentation | Examples matching real behaviour |

## Implementation guidance

### Keep both entrypoints aligned

If `game.ts` is the source of truth, ensure the emitted JavaScript is reproducible from the documented compiler configuration. Do not hand-edit compiled output without a clear reason.

### Make game logic testable

Prefer pure functions for fuel updates, attack outcomes, and win/loss decisions. Keep prompt collection and console rendering outside those functions.

### Handle input safely

Consider cancellation, empty names, unexpected answers, and invalid numeric values. A terminal app should exit cleanly when the user cancels.

### Keep output understandable

Colour may improve emphasis, but messages must remain readable when terminal colour support is disabled.

## Testing expectations

The current npm test script is a placeholder. Do not report it as passing. Use compiler checks and manual playtesting until automated tests are implemented.

Minimum manual coverage:
- Every opponent choice.
- Every action.
- Both random attack outcomes.
- Fuel threshold conditions.
- Potion and escape behaviour.
- Cancellation and process exit.
- Both JavaScript and TypeScript entrypoints.

## Pull request checklist

- [ ] The change has a clear purpose.
- [ ] TypeScript and JavaScript remain consistent.
- [ ] No secrets or private information are included.
- [ ] Compiler and syntax checks were run where relevant.
- [ ] Manual gameplay tests were performed.
- [ ] Documentation and changelog are updated.
- [ ] Known limitations are stated honestly.
