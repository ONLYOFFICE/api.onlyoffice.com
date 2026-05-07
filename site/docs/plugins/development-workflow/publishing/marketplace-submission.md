---
sidebar_position: 2
---

# Marketplace submission

## Overview

The ONLYOFFICE Plugin Marketplace is a public repository hosted on GitHub where users can discover and install community plugins directly from within ONLYOFFICE editors.

## Before you submit

Complete the [preparing for release](./preparing-for-release.md) checklist. Key requirements:
- All required files present: `config.json`, `index.html`, icons in `resources/`
- Valid `guid` in `asc.{UUID}` format
- Version set to `1.0.0` (or higher)
- No debug code remaining
- Tested in the editors listed in `EditorsSupport`

## Submission steps

### Step 1 — Create a GitHub account

Sign up at [github.com](https://github.com/).

### Step 2 — Fork the marketplace repository

Fork: [https://github.com/ONLYOFFICE/onlyoffice.github.io](https://github.com/ONLYOFFICE/onlyoffice.github.io)

### Step 3 — Build a GitHub Pages site from your fork (recommended)

Follow the [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) to enable it.

### Step 4 — Clone your fork locally

```bash
git clone https://github.com/YOUR-USERNAME/onlyoffice.github.io.git
cd onlyoffice.github.io
```

### Step 5 — Add your plugin folder

Copy your plugin folder into:
```
sdkjs-plugins/content/your-plugin-name/
```
Minimum contents:
```
your-plugin-name/
├── config.json
├── index.html
└── resources/
    ├── light/
    │   └── icon.png
    ├── dark/
    │   └── icon.png
    └── store/
        └── icons/
            ├── icon.png
            └── icon.svg
```
Folder naming: use lowercase alphanumeric characters (e.g., `mytranslationplugin` or `translationplugin`). Avoid spaces and special characters.

### Step 6 — Register your plugin in store/config.json

```json
{ "name": "your-plugin-name", "discussion": "" }
```

:::warning[Wrong]
```json
{ "name": "My Translation Plugin", "discussion": "" }
```
:::

:::tip[Correct]
```json
{ "name": "my-translation-plugin", "discussion": "" }
```
:::

### Step 7 — Push your changes

```bash
git add sdkjs-plugins/content/your-plugin-name/
git add store/config.json
git commit -m "Add your-plugin-name plugin"
git push origin main
```

### Step 8 — Create a pull request

Open PR at: [https://github.com/ONLYOFFICE/onlyoffice.github.io/pulls](https://github.com/ONLYOFFICE/onlyoffice.github.io/pulls)

Or use the **Submit your own plugin** button in the Plugin Manager.

## Testing before submission

```
https://YOUR-USERNAME.github.io/sdkjs-plugins/content/your-plugin-name/config.json
```

Use this URL in **Plugins → Plugin Manager → Add plugin from URL** to verify before creating the PR.

## After approval

- Plugin appears in the ONLYOFFICE Plugin Marketplace
- Users can install from Plugin Manager
- Visible in the [App Directory](https://www.onlyoffice.com/app-directory/en)

## Engaging with the community

- Issues: [https://github.com/ONLYOFFICE/onlyoffice.github.io/issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues)
- Forum: [https://forum.onlyoffice.com](https://forum.onlyoffice.com)

## Next steps

- [Private distribution](./private-distribution.md)
- [Versioning and updates](./versioning-and-updates.md)

## Additional resources

- [Marketplace](https://www.onlyoffice.com/app-directory/en)
- [Marketplace repo](https://github.com/ONLYOFFICE/onlyoffice.github.io)
- [Plugin examples](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content)
