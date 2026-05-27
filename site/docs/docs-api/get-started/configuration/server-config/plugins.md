---
sidebar_position: 31
---

# Plugins

These parameters define the plugins configuration.

## services.CoAuthoring.plugins.autostart

**type:** `string` | **default:** `[]`

Defines a list of plugins that run automatically.

## services.CoAuthoring.plugins.uri

**type:** `string` | **default:** `"/sdkjs-plugins"`

Defines a path to the folder where all the plugins are stored.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "plugins": {
        "uri": "/sdkjs-plugins",
        "autostart": []
      }
    }
  }
}
```

