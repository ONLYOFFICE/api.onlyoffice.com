# HexColor

Creates a color from a HEX string.

## Syntax

```javascript
expression.HexColor(hexString);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hexString | Required | string |  | The HEX string representing a color. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Apply a custom color defined by a hex code to text in a document.

```javascript editor-docx
// How do I set a font color using a hex value in a document?

// Color paragraph text with a specific hex color in a document.

const doc = Api.GetDocument();
const color = Api.HexColor('#DECADE');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in hex color.');
paragraph.SetColor(color);
```
