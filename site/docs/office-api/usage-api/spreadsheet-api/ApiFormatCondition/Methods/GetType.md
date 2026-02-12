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

This example gets the type of a conditional formatting rule.

```javascript editor-xlsx playground
// How to retrieve the type of existing conditional formatting rules.

// Get conditional formatting rule type.

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
