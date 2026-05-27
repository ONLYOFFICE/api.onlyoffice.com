# GetType

Returns the format condition type.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiFormatCondition](../ApiFormatCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## Example

Read the category that classifies a conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out whether a formatting rule is based on cell value, a formula, or a date period in a spreadsheet?

// Inspect what kind of condition a formatting rule evaluates in a spreadsheet.

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

let ruleType = condition1.GetType();

worksheet.GetRange("C1").SetValue("Rule type:");
worksheet.GetRange("C2").SetValue(ruleType);
```
