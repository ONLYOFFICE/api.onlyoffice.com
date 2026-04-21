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

Save changes to the workbook in a spreadsheet.

```javascript editor-xlsx
// How can I save using a workbook in a spreadsheet?

// Save for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
workbook.Save();
```
