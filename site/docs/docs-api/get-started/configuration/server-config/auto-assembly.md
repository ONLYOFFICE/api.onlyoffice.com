---
sidebar_position: 28
---

# Auto assembly

These parameters define the automatic forcesaving configuration.

## services.CoAuthoring.autoAssembly.step

`Type: string`   `Default: "1m"`

Defines the delay in minutes between the intervals.

## services.CoAuthoring.autoAssembly.enable

`Type: boolean`   `Default: false`

Defines if the automatic forcesaving is enabled or not.

## services.CoAuthoring.autoAssembly.interval

`Type: string`   `Default: "5m"`

Defines the interval time in minutes for initiating the automatic forcesaving.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "autoAssembly": {
        "enable": false,
        "interval": "5m",
        "step": "1m"
      }
    }
  }
}
```

