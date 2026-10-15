# ProtectedRangeUserType

Specifies the user type of the protected range.

## Type

Enumeration

## Values

- "CanEdit"
- "CanView"
- "NotView"

## Example

Set the anyone type to the protected range.

```javascript editor-xlsx
// How do I change the access type of a protected range to "NotView" for anyone?

// Set anyone type of a protected range.

protectedRange.SetAnyoneType("NotView");
```
