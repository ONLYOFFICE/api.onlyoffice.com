# Delete

Deletes all format conditions from the collection.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiFormatConditions](../ApiFormatConditions.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Remove all formatting rules applied to a group of cells in a spreadsheet.

```javascript editor-xlsx
// How do I clear every highlight and color rule from a selected range in a spreadsheet?

// Strip away previously set visual conditions to return cells to their default look in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);
worksheet.GetRange("A7").SetValue(60);
worksheet.GetRange("A8").SetValue(35);
worksheet.GetRange("A9").SetValue(80);

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Rules before delete: " + formatConditions.GetCount());
formatConditions.Delete();
worksheet.GetRange("B2").SetValue("Rules after delete: " + formatConditions.GetCount());
```
