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

This method doesn't return any data.

## Example

Delete the worksheet.

```javascript editor-xlsx
// How to delete sheets in a spreadsheet.

// Delete and display the result in a spreadsheet.

Api.AddSheet("New sheet");
let sheet = Api.GetActiveSheet();
sheet.Delete();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");
```
