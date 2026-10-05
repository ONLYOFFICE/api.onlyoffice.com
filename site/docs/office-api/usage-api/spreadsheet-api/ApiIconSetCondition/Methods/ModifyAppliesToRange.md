# ModifyAppliesToRange

Sets the cell range to which the current conditional formatting rule applies.

Inherited from [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md).

## Syntax

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - A variable that represents an [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range to which the current conditional formatting rule will be applied. |

## Returns

This method doesn't return any data.

## Example

Change the cell range that an icon set formatting rule covers in a spreadsheet.

```javascript editor-xlsx
// How do I reassign an icon set formatting rule to a different range of cells in a spreadsheet?

// Expand or shift the cells an icon set rule applies to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("B3").SetValue(250);

let range = worksheet.GetRange("A2:A3");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
iconCondition.SetIconSet("xl3Arrows");

let newRange = worksheet.GetRange("A2:B3");
iconCondition.ModifyAppliesToRange(newRange);

worksheet.GetRange("C1").SetValue("Icon set applied to A2:B3");
```
