# ReferenceStyle

The cell reference type.

## Type

Enumeration

## Values

- 'xlA1'
- 'xlR1C1'


## Example

This example gets reference style.

```javascript editor-xlsx
// How to retrieve a reference style and display it in the worksheet.

// Get a reference style.

builder.CreateFile("xlsx");
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();
```
