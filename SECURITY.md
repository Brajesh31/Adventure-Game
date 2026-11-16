# 🔐 Security Policy

Adventure Game is a local command-line simulation. It does not provide network services or process real accounts. Security still applies to dependencies, terminal input, repository automation, and contributed code.

## Reporting a vulnerability

Report vulnerabilities privately through GitHub's private vulnerability reporting feature when available. Otherwise contact the repository owner privately. Do not post exploitable details or private data in a public issue.

Include:
- Affected file and version/commit.
- Reproduction steps.
- Expected and observed behaviour.
- Potential impact.
- A suggested mitigation if known.

## Safe use

- Use fictional player names only.
- Do not enter passwords, access tokens, or personal information.
- Do not execute untrusted scripts copied into the project.
- Review dependencies before adding them.
- Do not commit `.env` files or secrets.
- Avoid logging sensitive terminal input.

## Dependency security

Use the lockfile for reproducible installation. Review direct and transitive dependencies before upgrades. The package currently lists many transitive dependencies as direct dependencies; any cleanup must be based on actual imports and verified with a clean install.

## Workflow security

Keep GitHub Actions permissions minimal. Any workflow that writes to the repository should have a clear purpose and narrowly scoped triggers. Review the README timestamp workflow because it currently has contents write permission and runs on push plus an hourly schedule.

## Response

Maintainers should reproduce the issue, assess impact, prepare a fix, and communicate resolution responsibly. No response-time guarantee is provided.
