---
sidebar_position: 5
---

# Logger

These parameters define the logger properties.

## log.filePath

`Type: string`   `Default: ""`

Defines a path to the log file.

## log.options

`Type: object`

Defines the log options.

### log.options.replaceConsole

`Type: boolean`   `Default: true`

Defines if the log information is printed to the console or not.

### log.options.categories.default.level

`Type: string`

Logging level for the application

## Example

```json
{
  "log": {
    "filePath": "",
    "options": {
      "replaceConsole": true
    }
  }
}
```

