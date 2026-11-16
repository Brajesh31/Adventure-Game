# 🧰 Adventure Game Maintainer Guide

## Responsibilities

Maintain the educational scope, keep the code runnable, review contributions, protect the repository, and ensure documentation reflects actual game behaviour.

## Repository boundaries

The project is a local Node.js CLI application. It uses Inquirer for prompts and Chalk for terminal output. There is no hosted game service, database, online multiplayer, or persistence layer.

## Issue triage

Classify incoming reports as:
- Gameplay defect.
- Prompt or terminal issue.
- TypeScript compilation issue.
- Dependency or lockfile issue.
- Documentation correction.
- Feature proposal.
- Security report.

Ask for a reproduction using fictional names and values. Do not request personal information.

## Change review

Check:
- Both source entrypoints or a clear source-of-truth policy.
- Prompt branch completeness.
- Correct player/opponent state transitions.
- Potion and attack behaviour.
- Randomness and deterministic testability.
- Graceful exit and cancellation.
- Terminal output with colour disabled.
- TypeScript compiler compatibility.
- Lockfile consistency.
- Updated documentation and roadmap.

## Release preparation

1. Review the complete diff.
2. Install from lockfile using `npm ci`.
3. Run JavaScript syntax checks.
4. Run TypeScript validation.
5. Run the game in an interactive terminal.
6. Test every opponent and action.
7. Verify both attack outcomes and ending conditions.
8. Update CHANGELOG.md.
9. Confirm package version, metadata, and MIT licence.
10. Tag the reviewed commit if publishing a version.

Do not claim a release has automated test coverage while the npm test script remains a placeholder.

## Dependency maintenance

The package currently lists numerous low-level packages directly. Review actual imports before removing or consolidating them. Keep package.json and package-lock.json synchronized. Avoid committing installed dependency folders.

## Workflow maintenance

Review the README timestamp workflow. It currently runs on every push and hourly, and has write permission to the repository. This can create unnecessary commits. Prefer minimal permissions and event triggers that do not create repeated documentation noise.

## Routine checklist

- [ ] Inspect open issues and pull requests.
- [ ] Check Actions runs.
- [ ] Review dependency advisories.
- [ ] Keep TypeScript and JavaScript aligned.
- [ ] Test all prompt branches.
- [ ] Verify docs and navigation links.
- [ ] Update changelog for meaningful changes.
- [ ] Keep secrets and private data out of commits.
