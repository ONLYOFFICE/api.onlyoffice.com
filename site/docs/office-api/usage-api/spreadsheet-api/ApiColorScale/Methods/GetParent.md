# GetParent

Returns the parent range object of the current format condition.

Inherited from [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md).

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Retrieve the cell range that a color scale rule is applied to in a spreadsheet.

```javascript editor-xlsx
// How do I find out which cells are covered by a color scale rule in a spreadsheet?

// Identify the source range behind an existing color gradient rule in a spreadsheet.

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

let parentRange = colorScale.GetParent();

worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentRange.GetAddress());
```
