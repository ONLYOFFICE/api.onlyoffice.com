# GetAppliesTo

Returns the range of cells to which the current conditional formatting rule applies.

Inherited from [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md).

## Syntax

```javascript
expression.GetAppliesTo();
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Read which cell range a top 10 conditional formatting rule covers in a spreadsheet.

```javascript editor-xlsx
// How do I find the cell range a top 10 conditional formatting rule is applied to in a spreadsheet?

// Check the address of cells targeted by a top 10 highlight rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let appliedRange = condition1.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Rule applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
```
