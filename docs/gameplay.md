# 🎮 Adventure Game: Gameplay and Rules

This guide explains the current gameplay model implemented in the repository. It is based on the present TypeScript and JavaScript entrypoints, which should be kept aligned as the project evolves.

## Contents

- [Game start](#game-start)
- [Player and opponent](#player-and-opponent)
- [Fuel model](#fuel-model)
- [Opponent selection](#opponent-selection)
- [Available actions](#available-actions)
- [Random attack result](#random-attack-result)
- [Game loop and ending](#game-loop-and-ending)
- [Current gameplay gaps](#current-gameplay-gaps)

## Game start

The program first asks the player to enter a name. It then presents a list of opponents. The current choices visible in the source are Zombie, Monsters, and Skeleton.

After collecting these answers, the program creates a player object and an opponent object.

## Player and opponent

Both classes use a name and a numeric `fuel` field. The initial value is 100. The names are displayed during the interaction and the fuel value represents a simplified health-like score.

Both classes expose two methods:
- `fueldecrease()`, which subtracts 25 from the fuel value.
- `fuelIncrease()`, which restores the value to 100.

These methods do not use a configurable damage or healing amount. They are basic demonstration methods.

## Fuel model

Current fuel behaviour:
- Start: 100.
- One decrease: 25.
- Restore: 100.

The code should define whether zero fuel means a loss or win in one shared rule. Current branches contain direct threshold checks and should be reviewed for consistent player/opponent semantics.

## Opponent selection

The menu exposes three opponent names. The source contains an explicit branch for Skeleton. The other opponent paths must be inspected and tested individually; the presence of a menu choice does not prove that its game flow is fully implemented.

## Available actions

The implemented Skeleton choice prompt presents:
- Attack.
- A potion-like action, currently misspelled in the option string as `Dirnk portion`.
- A run/escape action.

The spelling and label are part of the current implementation and should be corrected deliberately in a code change rather than assumed to be fixed by documentation.

## Random attack result

The attack flow generates a small random integer and uses it to decide which participant loses 25 fuel. This means the same action can produce different outcomes across runs.

Random logic currently lives inside the prompt loop. A more testable design would move outcome selection into a pure function that accepts a random value or injected random generator.

## Game loop and ending

The code uses a repeated loop to prompt for actions. It checks fuel thresholds to determine when to print a win or loss message and terminate the process.

A robust follow-up should model game status explicitly, avoid direct process termination in reusable functions, and ensure every opponent branch reaches a valid end state.

## Current gameplay gaps

- Opponent-specific branches are not equally complete.
- Action names contain spelling issues.
- Potion method invocation should be verified.
- The same player/opponent outcome rules are repeated inside branch logic.
- Random outcomes are difficult to unit test.
- There is no persistent save or account system.
- A clean quit/cancel path should be designed explicitly.

The project should continue to be described as a small terminal adventure simulation, not as a complete commercial game.
