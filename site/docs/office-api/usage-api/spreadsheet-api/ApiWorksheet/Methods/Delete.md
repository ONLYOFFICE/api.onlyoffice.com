# Delete

Deletes the current worksheet.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a sheet from the workbook in a spreadsheet.

```javascript editor-xlsx
// How do I delete a worksheet that is no longer needed in a spreadsheet?

// Permanently discard a sheet and confirm the removal with a message.

Api.AddSheet("New sheet");
let sheet = Api.GetActiveSheet();
sheet.Delete();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");
```
