---
sidebar_position: 23
---

# Editor

These parameters define the editor configuration.

## services.CoAuthoring.editor.binaryChanges

**type:** `boolean` | **default:** `false`

Defines if the document changes are saved in binary (**true**) or JSON (**false**) format.

## services.CoAuthoring.editor.maxChangesSize

**type:** `string` | **default:** `"150MB"`

Defines a limit on the total size of the changes made to the document. When the limit is exceeded, the user receives a dialog box with a suggestion to cancel the last action or switch to the offline mode.

## services.CoAuthoring.editor.reconnection

**type:** `object`

Defines the settings for reconnecting the editor to the server.

### services.CoAuthoring.editor.reconnection.attempts

**type:** `integer` | **default:** `50`

Defines a maximum number of attempts to reconnect the editor.

### services.CoAuthoring.editor.reconnection.delay

**type:** `string` | **default:** `"2s"`

Defines the attempt delay for reconnecting the editor.

## services.CoAuthoring.editor.spellcheckerUrl

**type:** `string` | **default:** `""`

Defines a path to the spell checker.

## services.CoAuthoring.editor.websocketMaxPayloadSize

**type:** `string` | **default:** `"1.5MB"`

Defines a maximum payload size of WebSocket.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "editor": {
        "spellcheckerUrl": "",
        "reconnection": {
          "attempts": 50,
          "delay": "2s"
        },
        "binaryChanges": false,
        "websocketMaxPayloadSize": "1.5MB",
        "maxChangesSize": "150MB"
      }
    }
  }
}
```

