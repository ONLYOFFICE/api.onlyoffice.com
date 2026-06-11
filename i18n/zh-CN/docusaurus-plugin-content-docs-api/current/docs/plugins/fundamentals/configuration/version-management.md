---
sidebar_position: 7
---

# Version management

Managing plugin versions correctly ensures smooth updates for users and clear communication of changes.

## Version field in config.json

The `version` field in [config.json](config-json.md) is a string in `MAJOR.MINOR.PATCH` format:

```json
{
  "version": "1.2.0"
}
```

| Segment | When to increment |
|---------|------------------|
| MAJOR | Breaking changes — plugin behavior or API surface changes incompatibly |
| MINOR | New features, backwards-compatible |
| PATCH | Bug fixes, minor tweaks |

## minVersion

Use `minVersion` to declare the minimum ONLYOFFICE editor version your plugin requires:

```json
{
  "minVersion": "7.0.0"
}
```

Users on older editors will not be offered the plugin update.

## Communicating changes

Maintain a `CHANGELOG.md` in your plugin repository. When submitting to the [Plugin Marketplace](../../development-workflow/publishing/marketplace-submission.md), a clear changelog helps reviewers and users understand what changed.

## See also

- [Preparing for release](../../development-workflow/publishing/preparing-for-release.md)
- [Versioning and updates](../../development-workflow/publishing/versioning-and-updates.md)
