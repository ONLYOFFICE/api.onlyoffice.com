# GetColor

Returns the shading color.

## Syntax

```javascript
expression.GetColor();
```

`expression` - A variable that represents an [ApiShd](../ApiShd.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## Example

Retrieve the color of a paragraph shading in a document.

```javascript editor-docx
// Read back the theme color used for a paragraph shading in a document.

// Shade a paragraph with the accent2 theme color and write the color name into the paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.SetShd(Api.CreateShd('clear', Api.Color('accent2')));
paragraph.AddText('Theme color of the paragraph shading: ' + paragraph.GetShd().GetColor().GetThemeName());
```
