# ModifyAppliesToRange

Sets the cell range to which the current conditional formatting rule applies.

## Syntax

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range to which the current conditional formatting rule will be applied. |

## Returns

This method doesn't return any data.

## Example

This example modifies the range where a conditional formatting rule applies.

```javascript editor-xlsx
// How to change the cell range for existing conditional formatting rules.

// Modify conditional formatting rule range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);
worksheet.GetRange("A7").SetValue(180);
worksheet.GetRange("A8").SetValue(220);

let dataRange = worksheet.GetRange("A2:A8");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original range:");
worksheet.GetRange("C2").SetValue(condition1.GetAppliesTo().GetAddress());

let newRange = worksheet.GetRange("A2:A5");
condition1.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Modified range:");
worksheet.GetRange("D2").SetValue(condition1.GetAppliesTo().GetAddress());

```
