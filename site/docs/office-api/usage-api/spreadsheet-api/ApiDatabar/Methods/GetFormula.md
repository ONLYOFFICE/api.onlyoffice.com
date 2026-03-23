# GetFormula

Returns the formula of the data bar.

## Syntax

```javascript
expression.GetFormula();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example demonstrates getting the formula from a data bar conditional formatting rule.

```javascript editor-xlsx
// How to retrieve the formula string from a data bar.

// Get the formula of a data bar conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let formula = dataBar.GetFormula();

worksheet.GetRange("C1").SetValue("Formula:");
worksheet.GetRange("C2").SetValue(formula || "None");

```
