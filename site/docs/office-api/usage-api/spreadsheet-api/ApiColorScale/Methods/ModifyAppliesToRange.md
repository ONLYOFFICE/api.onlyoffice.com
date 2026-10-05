# ModifyAppliesToRange

Sets the cell range to which the current conditional formatting rule applies.

Inherited from [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md).

## Syntax

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - A variable that represents an [ApiColorScale](../ApiColorScale.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range to which the current conditional formatting rule will be applied. |

## Returns

This method doesn't return any data.

## Example

Change the cells that a color gradient rule covers to a different range in a spreadsheet.

```javascript editor-xlsx
// How do I reassign a color scale rule so it targets a new group of cells in a spreadsheet?

// Expand or shift the area affected by a color gradient condition without removing the rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let originalRange = worksheet.GetRange("A2:A4");

let formatConditions = originalRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Original range:");
worksheet.GetRange("C2").SetValue(colorScale.GetAppliesTo().GetAddress());

let newRange = worksheet.GetRange("A2:A6");
colorScale.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Modified range:");
worksheet.GetRange("D2").SetValue(colorScale.GetAppliesTo().GetAddress());
```
