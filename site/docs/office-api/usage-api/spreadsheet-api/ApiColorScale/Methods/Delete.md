# Delete

Deletes the current format condition.

Inherited from [ApiFormatCondition.Delete](../../ApiFormatCondition/Methods/Delete.md).

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Remove a color scale formatting rule from a range in a spreadsheet.

```javascript editor-xlsx
// How do I delete an existing color scale rule that was applied to a data range in a spreadsheet?

// Clear gradient-based cell shading from a column and confirm the rule count drops in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Rules before deletion:");
worksheet.GetRange("C2").SetValue(formatConditions.GetCount());

colorScale.Delete();

worksheet.GetRange("D1").SetValue("Rules after deletion:");
worksheet.GetRange("D2").SetValue(formatConditions.GetCount());
```
