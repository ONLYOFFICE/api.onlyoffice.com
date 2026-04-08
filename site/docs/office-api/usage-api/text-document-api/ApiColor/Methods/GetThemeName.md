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

This example shows how to get the theme color name of an ApiColor object.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const hexColor = Api.HexColor('#4080DE');
const themeColor = Api.ThemeColor('accent1');

paragraph.AddText('Theme name of hexColor: ' + hexColor.GetThemeName());
paragraph.AddLineBreak();
paragraph.AddText('Theme name of themeColor: ' + themeColor.GetThemeName());

```
