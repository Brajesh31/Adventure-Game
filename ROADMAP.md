# 🗺️ Adventure Game Roadmap

Items below are proposed improvements, not completed functionality or delivery commitments.

## Priority 1: Gameplay correctness

- [ ] Define shared win/loss rules.
- [ ] Complete every opponent branch.
- [ ] Correct action labels and spelling.
- [ ] Ensure potion method invocation restores fuel.
- [ ] Define escape behaviour.
- [ ] Add clean cancellation and exit handling.

## Priority 2: Game architecture

- [ ] Extract fuel and outcome logic into reusable functions.
- [ ] Separate prompt handling from game state.
- [ ] Use consistent naming and class conventions.
- [ ] Introduce a typed action and opponent model.
- [ ] Keep generated JavaScript reproducible from TypeScript.

## Priority 3: Testing

- [ ] Replace the placeholder npm test script.
- [ ] Add unit tests for fuel updates.
- [ ] Inject randomness for deterministic outcome tests.
- [ ] Test every opponent and action.
- [ ] Test end-game conditions.
- [ ] Add CI checks for syntax, TypeScript, and tests.

## Priority 4: Developer experience

- [ ] Add clear start/build scripts.
- [ ] Review direct vs transitive package dependencies.
- [ ] Document supported Node.js versions.
- [ ] Reduce noisy README timestamp commits.
- [ ] Add a clean game restart option.

## Future ideas

A score summary, additional opponent types, richer narrative output, difficulty settings, or configurable battle rules may be useful future learning exercises. Add these only after the core game state and tests are reliable.
