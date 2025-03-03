# GetOrientation

Returns the current range angle.

## Syntax

```javascript
expression.GetOrientation();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Angle](../../Enumeration/Angle.md)

## Example

This example shows how to get the range angle.

```javascript editor-xlsx
// How to find out cell orientation of a range.

// Get a range, get its orientation (upward, downward, etc.) and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetOrientation("xlUpward");
var sOrientation = oRange.GetOrientation();
oWorksheet.GetRange("A3").SetValue("Orientation: " + sOrientation);
```
