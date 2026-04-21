# ReferenceStyle

The cell reference type.

## Type

Enumeration

## Values

- 'xlA1'
- 'xlR1C1'

## Example

Get the reference style.

```javascript editor-xlsx
// Retrieve the reference style and display it in the worksheet.

// The reference style value is written to cell A1.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
