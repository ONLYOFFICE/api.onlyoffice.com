# GetNumberFormat

Returns the number format applied to a cell when the conditional formatting rule evaluates to true.

Inherited from [ApiFormatCondition.GetNumberFormat](../../ApiFormatCondition/Methods/GetNumberFormat.md).

## Syntax

```javascript
expression.GetNumberFormat();
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the number format assigned to a top 10 conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I find what number format a top 10 conditional formatting rule uses in a spreadsheet?

// Check the display format applied to highlighted top values in a spreadsheet.

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

let currentFormat = condition1.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Current format:");
worksheet.GetRange("C2").SetValue(currentFormat || "General");
```
