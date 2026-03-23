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

This example paste data with paste options.

```javascript editor-xlsx
// How to paste indicating special parameters.

// Specify the mathematical operation which will be applied to the copied data.

// Specify that the add mathematical operation will be applied to the copied data.

range.PasteSpecial("xlPasteAll", "xlPasteSpecialOperationAdd");
```
