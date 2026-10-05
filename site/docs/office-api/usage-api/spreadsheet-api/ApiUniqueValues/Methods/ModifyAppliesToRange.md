# ModifyAppliesToRange

Sets the cell range to which the current conditional formatting rule applies.

Inherited from [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md).

## Syntax

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range to which the current conditional formatting rule will be applied. |

## Returns

This method doesn't return any data.

## Example

Change the cell range covered by a unique values formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I update which cells a unique values formatting rule applies to in a spreadsheet?

// Expand or narrow the area a unique values rule highlights in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let originalRange = uniqueValuesCondition.GetAppliesTo();
let originalAddress = originalRange.GetAddress();

let newRange = worksheet.GetRange("A2:B5");
uniqueValuesCondition.ModifyAppliesToRange(newRange);

let modifiedRange = uniqueValuesCondition.GetAppliesTo();
let modifiedAddress = modifiedRange.GetAddress();

worksheet.GetRange("D1").SetValue("Original range:");
worksheet.GetRange("D2").SetValue(originalAddress);
worksheet.GetRange("D3").SetValue("Modified range:");
worksheet.GetRange("D4").SetValue(modifiedAddress);
```
