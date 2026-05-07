---
sidebar_position: 17
---

# Windows System Root certificates

## win-ca.inject

**type:** `string` | **default:** `"+"`

Defines the injection mode of the Windows System Root certificates. The "+" means that a new experimental method is used to install certificates.

## Example

```json
{
  "win-ca": {
    "inject": "+"
  }
}
```

