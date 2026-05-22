# Save

Saves changes to the specified document.

## Syntax

```javascript
expression.Save();
```

`expression` - A variable that represents a [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Persist all unsaved changes to disk after editing a workbook in a spreadsheet.

```javascript editor-xlsx
// How do I make sure my changes are written to the file in a spreadsheet?

// Write a value to a cell and immediately commit the workbook to storage in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
workbook.Save();
```
