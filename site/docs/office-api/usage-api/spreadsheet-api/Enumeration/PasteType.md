# PasteType

Specifies the part of the range to be pasted.

## Type

Enumeration

## Values

- "xlPasteAll"
- "xlPasteAllExceptBorders"
- "xlPasteColumnWidths"
- "xlPasteComments"
- "xlPasteFormats"
- "xlPasteFormulas"
- "xlPasteFormulasAndNumberFormats"
- "xlPasteValues"
- "xlPasteValuesAndNumberFormats"

## Example

Paste data with paste all options.

```javascript editor-xlsx
// Specifies the part of the range to be pasted.

// Specifies that all the range will be pasted.

range.PasteSpecial("xlPasteAll");
```
