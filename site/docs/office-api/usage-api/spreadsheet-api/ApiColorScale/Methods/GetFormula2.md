# GetFormula2

Returns the second formula used by the current conditional formatting rule.

## Syntax

```javascript
expression.GetFormula2();
```

`expression` - A variable that represents a [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the second formula of a conditional formatting rule.

```javascript editor-xlsx playground
// How to retrieve the second formula from conditional formatting rules.

// Get conditional formatting rule second formula.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlBetween", "100", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let formula1 = condition1.GetFormula1();
let formula2 = condition1.GetFormula2();

worksheet.GetRange("C1").SetValue("First formula:");
worksheet.GetRange("C2").SetValue(formula1);
worksheet.GetRange("C3").SetValue("Second formula:");
worksheet.GetRange("C4").SetValue(formula2);

```
