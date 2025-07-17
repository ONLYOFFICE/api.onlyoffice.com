# GetFormulaArray

Returns an array formula from the current range.

## Syntax

```javascript
expression.GetFormulaArray();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example shows how to get the array formula of a range.

```javascript editor-xlsx
// How to get an array formula value.

// Get a range, get its array formula value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A3").SetFormulaArray("={1;2;3}");
let value = worksheet.GetRange("A1").GetFormulaArray();
worksheet.GetRange("A4").SetValue("Array formula of the cell A1: ");
worksheet.GetRange("B4").SetValue("'" + value);
value = worksheet.GetRange("A2").GetFormulaArray();
worksheet.GetRange("A5").SetValue("Array formula of the cell A2: ");
worksheet.GetRange("B5").SetValue("'" + value);
value = worksheet.GetRange("A3").GetFormulaArray();
worksheet.GetRange("A6").SetValue("Array formula of the cell A3: ");
worksheet.GetRange("B6").SetValue("'" + value);
```
