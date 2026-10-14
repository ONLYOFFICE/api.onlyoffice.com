---
description: "The `ui-kit` skill teaches an AI coding agent to build screens with this kit in your own React app: which component fits the job, what its props are called, how to install and theme it, and a check it runs on the result."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/AgentSkills.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# Agent skills

The `ui-kit` skill teaches an AI coding agent to build screens with this kit in your own React
app: which component fits the job, what its props are called, how to install and theme it, and
a check it runs on the result. The agent loads it on its own when a task matches. It ships in
the `onlyoffice` plugin from the
[`agent-skills`](https://git.onlyoffice.com/ONLYOFFICE/agent-skills) repository, in the open
[Agent Skills](https://agentskills.io) format, so Claude Code, Cursor, Copilot and Codex all
read it.

## What the skill takes care of

It knows this kit the way its authors do: it reads each component's own page, in the
installed package or on the API site, and adds the rules those pages cannot state:

- **The right prop, first time** -- Knows which name each component shows and hides with: `visible · isOpen · opened · open`
- **Labels and translations in place** -- Mounts the two providers the kit expects: `<ThemeProvider> + <TranslationProvider>`
- **Forms that read well** -- Captions, required markers and focus wired to each field: `labelVisible · labelFor · id`
- **Layouts that fit** -- Gives the controls that need it a size of their own: `ToggleButton · Textarea · Loader`
- **Only the CSS you use** -- Each component brings its own styles, nothing to import: `import { Button } from "@onlyoffice/apps-ui-kit"`
- **The right modules for the job** -- Keeps to the public components in your own app: `components · hooks · providers/theme`

## Why it matters for vibe coding

You don't read every line, so a mistake has to surface without you. With the skill, the
agent checks its own work before handing it over:

**Without**

1. You describe the screen
2. The agent guesses -- props, defaults, imports
3. It looks right -- compiles, renders
4. It breaks later -- dark theme, another language, the keyboard

**With the skill**

1. You describe the screen
2. The skill loads itself -- from what you asked
3. The agent follows its rules -- version checked first
4. check-usage.mjs runs -- finds the silent faults
5. Handed over checked

And it is measured, not assumed:

<APITable>

| Suite | With the skill | Without |
| --- | --- | --- |
| ui-kit: five build tasks | 70/70 | 58/70 |
| ui-kit: review a faulty file | 13/13 | 8/13 |
| Plugin and embed questions | 100% | 32% |

</APITable>

## Install

**Claude Code**

```
/plugin marketplace add git@git.onlyoffice.com:ONLYOFFICE/agent-skills.git
/plugin install onlyoffice@onlyoffice-skills
```

Then run `/mcp` once to sign in to the `docspace` MCP server, which gives the agent live
access to a workspace.

**Cursor, Codex, Copilot**

```bash
git clone git@git.onlyoffice.com:ONLYOFFICE/agent-skills.git
cp -r agent-skills/skills/* .agents/skills/
```

## Use

Just describe the task. To force a skill, name it: `/onlyoffice:ui-kit`. A good answer names
the kit version it read and what `check-usage.mjs` found. If yours doesn't, ask for both.
