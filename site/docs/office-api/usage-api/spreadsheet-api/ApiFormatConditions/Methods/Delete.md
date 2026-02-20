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

This example deletes all conditional formatting from a range.

```javascript editor-xlsx playground
// How to delete conditional formatting rules from cells.

// Delete all conditional formatting from cells.

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
