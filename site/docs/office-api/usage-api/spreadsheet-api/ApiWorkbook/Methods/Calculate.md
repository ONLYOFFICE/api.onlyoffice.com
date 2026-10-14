# Calculate

Recalculates the cells that need recalculation (changed, added or volatile) across the workbook. Forces the recalc that is otherwise deferred until a macro finishes, so up-to-date formula results can be read within the same macro.

## Syntax

```javascript
expression.Calculate();
```

`expression` - A variable that represents an [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Recalculate the formulas that need recalculation across the workbook.

```javascript editor-xlsx
// How do I read an up-to-date formula result inside a macro?

// Force the recalculation and show the result in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("B1").SetValue("=A1*2");
workbook.Calculate();
let value = worksheet.GetRange("B1").GetValue();
worksheet.GetRange("A3").SetValue("Recalculated value of B1: ");
worksheet.GetRange("B3").SetValue(value);
```
