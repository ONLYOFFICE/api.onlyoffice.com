# GetAppliesTo

Returns the range of cells to which the current conditional formatting rule applies.

## Syntax

```javascript
expression.GetAppliesTo();
```

`expression` - A variable that represents a [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example gets the range where a conditional formatting rule applies.

```javascript editor-xlsx playground
// How to retrieve the cell range of existing conditional formatting rules.

// Get conditional formatting rule range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let appliedRange = condition1.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Rule applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());

```
