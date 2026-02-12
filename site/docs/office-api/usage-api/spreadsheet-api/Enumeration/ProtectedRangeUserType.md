# ProtectedRangeUserType

Specifies the user type of the protected range.

## Type

Enumeration

## Values

- "CanEdit"
- "CanView"
- "NotView"


## Example

This example sets the anyone type to the protected range.

```javascript editor-xlsx playground
// How to change the anyone type of protected range to "NotView".

// Set anyone type of a protected range.

protectedRange.SetAnyoneType("NotView");
```
