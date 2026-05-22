# GetHex

Gets the HEX string representation of the color.

## Syntax

```javascript
expression.GetHex();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the hex color value from different color types in a document.

```javascript editor-docx
// How do I get the hexadecimal representation of a color in a document?

// Verify that theme and auto colors always return black hex while hex-defined colors return their actual value.

const doc = Api.GetDocument();

const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const rgbaColor = Api.HexColor('#FF0000');

const themeColorHex = themeColor.GetHex();
const autoColorHex = autoColor.GetHex();
const rgbaColorHex = rgbaColor.GetHex();

const paragraph = doc.GetElement(0);
paragraph.AddText('Hex of themeColor: ' + themeColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex of autoColor: ' + autoColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex of rgbaColor: ' + rgbaColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex for theme colors and auto color are always opaque black; actual color depends on the document theme.');
```
