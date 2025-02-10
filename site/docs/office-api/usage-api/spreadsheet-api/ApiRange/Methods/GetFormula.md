# GetFormula

Returns a formula of the specified range.

## Syntax

```javascript
expression.GetFormula();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string | string[][]

## Example

This example shows how to get a formula of the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(1);
oWorksheet.GetRange("C1").SetValue(2);
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("=SUM(B1:C1)");
var sFormula = oRange.GetFormula();
oWorksheet.GetRange("A3").SetValue("Formula from cell A1: " + sFormula);
```
