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

Retrieve the theme color name from a color object in a document.

```javascript editor-docx
// How do I find out which theme slot a color belongs to in a document?

// Distinguish between a color defined by a hex value and one tied to a named theme slot in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const hexColor = Api.HexColor('#4080DE');
const themeColor = Api.ThemeColor('accent1');

paragraph.AddText('Theme name of hexColor: ' + hexColor.GetThemeName());
paragraph.AddLineBreak();
paragraph.AddText('Theme name of themeColor: ' + themeColor.GetThemeName());
```
