# GetParent

Returns the parent range object of the current format condition.

Inherited from [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md).

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Read the worksheet that owns a top 10 conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I find the parent range of a top 10 conditional formatting rule in a spreadsheet?

// Identify which range object a top 10 highlight rule belongs to in a spreadsheet.

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

let parent = condition1.GetParent();

worksheet.GetRange("C1").SetValue("Parent name:");
worksheet.GetRange("C2").SetValue(parent.GetAddress());
```
