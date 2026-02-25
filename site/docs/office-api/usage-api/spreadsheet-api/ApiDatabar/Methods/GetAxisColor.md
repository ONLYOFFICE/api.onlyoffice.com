# GetAxisColor

Returns the axis color of the data bar conditional formatting rule.

## Syntax

```javascript
expression.GetAxisColor();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

This example demonstrates getting the axis color from a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to retrieve the axis color of a data bar.

// Get the axis color of a data bar conditional formatting rule.

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

let axisColor = dataBar.GetAxisColor();

worksheet.GetRange("C1").SetValue("Has Axis Color:");
worksheet.GetRange("C2").SetValue(axisColor ? "Yes" : "No");

```
