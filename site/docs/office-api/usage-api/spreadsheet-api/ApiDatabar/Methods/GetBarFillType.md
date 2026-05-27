# GetBarFillType

Returns the bar fill type of the data bar.

## Syntax

```javascript
expression.GetBarFillType();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlDataBarFillType](../../Enumeration/XlDataBarFillType.md)

## Example

Read whether data bars use a solid or gradient fill in a spreadsheet.

```javascript editor-xlsx
// How do I find out which fill style is applied to data bars in a spreadsheet?

// Determine the shading style of data bars to understand their visual format in a spreadsheet.

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

let fillType = dataBar.GetBarFillType();

worksheet.GetRange("C1").SetValue("Fill Type:");
worksheet.GetRange("C2").SetValue(fillType);
```
