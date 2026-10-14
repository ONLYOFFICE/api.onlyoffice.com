# Redraw

Redraws the editor screen, making the changes already made by a macro visible without waiting for it to finish. Observable from asynchronous code only. Repaints without recalculating: call [ApiWorkbook#Calculate](../../ApiWorkbook/Methods/Calculate.md) first if formula results must be up to date.

## Syntax

```javascript
expression.Redraw();
```

`expression` - A variable that represents an [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Redraw the screen so the changes made so far become visible.

```javascript editor-xlsx
// How do I show intermediate results while a macro is still running?

// Write the data, force the recalculation and repaint the canvas.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("B1").SetValue("=A1*2");
workbook.Calculate();
workbook.Redraw();
worksheet.GetRange("A3").SetValue("The value of B1 is already on the screen: ");
worksheet.GetRange("B3").SetValue(worksheet.GetRange("B1").GetValue());
```
