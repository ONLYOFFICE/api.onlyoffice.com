# PasteSpecialOperation

The mathematical operation which will be applied to the copied data.

## Type

Enumeration

## Values

- "xlPasteSpecialOperationAdd"
- "xlPasteSpecialOperationDivide"
- "xlPasteSpecialOperationMultiply"
- "xlPasteSpecialOperationNone"
- "xlPasteSpecialOperationSubtract"

## Example

Paste data with paste options.

```javascript editor-xlsx
// Specify the mathematical operation which will be applied to the copied data.

// Specify that the add mathematical operation will be applied to the copied data.

range.PasteSpecial("xlPasteAll", "xlPasteSpecialOperationAdd");
```
