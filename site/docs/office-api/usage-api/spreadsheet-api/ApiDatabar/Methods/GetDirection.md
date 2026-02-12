# GetDirection

Returns the direction of the data bar.

## Syntax

```javascript
expression.GetDirection();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlReadingOrder](../../Enumeration/XlReadingOrder.md)

## Example

This example demonstrates getting the direction setting from a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to check the reading order direction of a data bar.

// Get the direction setting of a data bar conditional formatting rule.

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

let direction = dataBar.GetDirection();

worksheet.GetRange("C1").SetValue("Direction:");
worksheet.GetRange("C2").SetValue(direction);

```
