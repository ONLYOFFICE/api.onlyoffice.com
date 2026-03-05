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

This example shows how to get the hex representation of the color.

```javascript editor-docx
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
