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

Read the text rotation angle applied to a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I find out the current text orientation of a range in a spreadsheet?

// Confirm the direction cells are tilted after applying a rotation style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
let orientation = range.GetOrientation();
worksheet.GetRange("A3").SetValue("Orientation: " + orientation);
```
