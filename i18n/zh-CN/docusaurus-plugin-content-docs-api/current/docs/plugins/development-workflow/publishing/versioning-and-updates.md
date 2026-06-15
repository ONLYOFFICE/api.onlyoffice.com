---
sidebar_position: 4
---

# Versioning and updates

## Overview

Once your plugin is published in the ONLYOFFICE Plugin Marketplace, you will need to release updates to fix bugs, add features, or maintain compatibility with new ONLYOFFICE versions.

## Versioning scheme

ONLYOFFICE plugins use semantic versioning (`MAJOR.MINOR.PATCH`):

| Part | When to increment | Example |
|------|-------------------|---------|
| `MAJOR` | Breaking changes or major rewrites | `1.0.0` → `2.0.0` |
| `MINOR` | New features, backwards-compatible | `1.0.0` → `1.1.0` |
| `PATCH` | Bug fixes, small corrections | `1.0.0` → `1.0.1` |

```json
{ "name": "My Plugin", "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}", "version": "1.2.0" }
```

**Always increment the version when submitting an update.**

:::warning[Wrong]
```json
{ "version": "1.0.0" }
```
Submitting an update without changing the version - Plugin Manager cannot detect the update.
:::

:::tip[Correct]
```json
{ "version": "1.0.1" }
```
:::

## Specifying minimum ONLYOFFICE version

```json
{ "minVersion": "7.0.0" }
```

## Submitting an update

### Step 1 - Sync your fork with upstream

```bash
git remote add upstream https://github.com/ONLYOFFICE/onlyoffice.github.io.git
git fetch upstream
git checkout main
git merge upstream/main
```

### Step 2 - Update your plugin files

Replace updated files in:
```
sdkjs-plugins/content/your-plugin-name/
```

### Step 3 - Increment the version in config.json

```json
{ "version": "1.1.0" }
```

### Step 4 - Commit and push

```bash
git add sdkjs-plugins/content/your-plugin-name/
git commit -m "Update your-plugin-name to v1.1.0"
git push origin main
```

### Step 5 - Create a pull request

Include in PR description: what changed, new ONLYOFFICE version requirements, bug fixes or breaking changes.

## Maintaining backwards compatibility

- Do not remove existing functionality without a MAJOR version bump.
- **Do not change the plugin GUID.** It is permanent.

:::warning[Wrong]
```json
{ "guid": "asc.{NEW-GUID-FOR-UPDATE}" }
```
Changing the GUID causes the marketplace to treat the update as a brand new plugin.
:::

:::tip[Correct]
```json
{ "guid": "asc.{ORIGINAL-GUID-UNCHANGED}" }
```
:::

## Handling ONLYOFFICE version compatibility

Test after each ONLYOFFICE release:
- All `executeMethod` calls return expected results
- Event handlers fire correctly
- UI elements render correctly

Check the [Changelog](../../../more-information/changelog) after each ONLYOFFICE release.

## Keeping a changelog for your plugin

```markdown
# Changelog

## 1.1.0 - 2025-06-01
- Added support for Spreadsheet Editor
- Improved performance for large documents

## 1.0.1 - 2025-03-15
- Fixed icon not appearing on high-DPI displays
- Fixed plugin not closing when Cancel is clicked

## 1.0.0 - 2025-01-10
- Initial release
```

## Removing a plugin from the marketplace

Open an issue at [https://github.com/ONLYOFFICE/onlyoffice.github.io/issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) with the plugin name and reason.

## Next steps

- [Marketplace submission](./marketplace-submission.md)
- [Preparing for release](./preparing-for-release.md)
- [Private distribution](./private-distribution.md)

## Additional resources

- [Changelog](../../../more-information/changelog)
- [Configuration](../../fundamentals/configuration/config-json.md)
- [Marketplace repo](https://github.com/ONLYOFFICE/onlyoffice.github.io)
- [Plugin examples](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content)
