# GetThemeName

Gets the theme color name if the color is a theme color.

## Syntax

```javascript
expression.GetThemeName();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SchemeColorId](../../Enumeration/SchemeColorId.md) \| null

## Example

This example shows how to get the theme color name used in a shape fill.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Theme name: " + themeColor.GetThemeName());

```
