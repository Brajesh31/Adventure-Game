# 🧰 Adventure Game Maintainer Guide

## Responsibilities

Maintain the educational scope, keep the code runnable, review contributions, protect the repository, and ensure documentation reflects actual game behaviour.

## Repository boundaries

The project is a local Node.js CLI application. It uses Inquirer for prompts and Chalk for terminal output. There is no hosted game service, database, online multiplayer, or persistence layer.

## Issue triage

Classify incoming reports as gameplay defects, prompt or terminal issues, TypeScript compilation issues, dependency problems, documentation corrections, feature proposals, or security reports.

Ask for reproductions using fictional names and values. Do not request personal information.

## Change review

Check both entrypoints or a clear source-of-truth policy, prompt branch completeness, state transitions, potion and attack behaviour, random testability, graceful exit, terminal output without colour, compiler compatibility, lockfile consistency, and documentation accuracy.

## Release preparation

1. Review the complete diff.
2. Install from lockfile using `npm ci`.
3. Run JavaScript syntax checks.
4. Run TypeScript validation.
5. Play through every opponent/action flow.
6. Verify attack outcomes and ending conditions.
7. Update CHANGELOG.md.
8. Confirm package metadata and MIT licence.
9. Tag the reviewed commit if publishing a version.

Do not claim automated test coverage while npm test remains a placeholder.

## Dependency maintenance

The package currently lists numerous low-level packages directly. Review actual imports before removing or consolidating them. Keep package.json and package-lock.json synchronized. Avoid committing installed dependency folders.

## Workflow maintenance

Review the README timestamp workflow. It currently runs on every push and hourly, and has write permission to the repository. This can create unnecessary commits. Prefer minimal permissions and triggers that do not create repeated documentation noise.

## Routine checklist

- [ ] Inspect open issues and pull requests.
- [ ] Check Actions runs.
- [ ] Review dependency advisories.
- [ ] Keep TypeScript and JavaScript aligned.
- [ ] Test all prompt branches.
- [ ] Verify documentation links.
- [ ] Update the changelog.
- [ ] Keep secrets and private data out of commits.
