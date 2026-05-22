# GetRGB

Returns a color value in RGB format.

## Syntax

```javascript
expression.GetRGB();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Extract the red, green, and blue components of a color in a spreadsheet.

```javascript editor-xlsx
// How do I read the individual RGB channel values of a color object in a spreadsheet?

// Break down a color into its numeric channel values and write the result to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let rgbColor = color.GetRGB();
worksheet.GetRange("A4").SetValue("Cell color in RGB format: " + rgbColor);
```
