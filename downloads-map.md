# Downloads map — the single source of truth for promised links

Every giveaway a subscriber is promised has ONE permanent link (a "front door")
that never changes. The front door points at the actual file. If the file ever
moves or is renamed, update the target in `_redirects` only — every post, email
and opt-in keeps working. A broken link becomes a one-line fix, not a broken
promise.

| Giveaway | Permanent link (use this everywhere) | Actual file | Referenced in |
|---|---|---|---|
| One-Prompt Build Kit | https://isaacpeterson.au/downloads/one-prompt-build-kit | one-prompt-build-kit.pdf | kit-one-prompt-build.html, skills.html |

## When you add a giveaway
1. Add the file to the repo.
2. Add a line to `_redirects`: `/downloads/<slug>   /<file>   200`
3. Add a row to the table above.
4. Use only the permanent link in posts / emails / opt-ins.

## Before you reorganise or rename anything
Click each permanent link above and confirm the file still downloads. Sixty
seconds. That is the whole rigor budget the one-way door needs.
