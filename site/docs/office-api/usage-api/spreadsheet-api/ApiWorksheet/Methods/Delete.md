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

This example deletes the worksheet.

```javascript
Api.AddSheet("New sheet");
var oSheet = Api.GetActiveSheet();
oSheet.Delete();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");
```
