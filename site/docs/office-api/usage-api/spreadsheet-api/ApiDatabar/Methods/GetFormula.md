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

Read the formula that drives a data bar rule in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve the formula expression tied to a data bar in a spreadsheet?

// Examine the calculation behind a data bar condition to understand its logic in a spreadsheet.

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
