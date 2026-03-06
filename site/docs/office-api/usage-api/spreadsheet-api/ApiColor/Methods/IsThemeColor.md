# IsThemeColor

Returns true if the color is a theme color.

## Syntax

```javascript
expression.IsThemeColor();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to check if the color used in a shape fill is a theme color.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartMagneticTape", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Is hexColor a theme color? " + hexColor.IsThemeColor());
worksheet.GetRange("A14").SetValue("Is themeColor a theme color? " + themeColor.IsThemeColor());

```
