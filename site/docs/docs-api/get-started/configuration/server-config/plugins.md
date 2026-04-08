---
sidebar_position: 31
---

# Plugins

These parameters define the plugins configuration.

## services.CoAuthoring.plugins.autostart

`Type: string`   `Default: []`

Defines a list of plugins that run automatically.

## services.CoAuthoring.plugins.uri

`Type: string`   `Default: "/sdkjs-plugins"`

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

