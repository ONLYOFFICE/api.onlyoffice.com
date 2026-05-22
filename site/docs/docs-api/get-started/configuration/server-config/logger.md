---
sidebar_position: 5
---

# Logger

These parameters define the logger properties.

## log.filePath

**type:** `string` | **default:** `""`

Defines a path to the log file.

## log.options

**type:** `object`

Defines the log options.

### log.options.replaceConsole

**type:** `boolean` | **default:** `true`

Defines if the log information is printed to the console or not.

### log.options.categories.default.level

**type:** `string`

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

