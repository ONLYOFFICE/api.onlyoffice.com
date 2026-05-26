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

Determine whether a color is linked to a theme slot in a document.

```javascript editor-docx
// How do I check if a color comes from the document theme in a document?

// Distinguish a fixed hex color from a theme-bound color that changes with the theme in a document.

const doc = Api.GetDocument();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Is themeColor a theme color? ' + themeColor.IsThemeColor());
```
