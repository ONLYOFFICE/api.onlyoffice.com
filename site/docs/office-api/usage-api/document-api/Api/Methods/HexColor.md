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
| hexString | Required | string |  | No description provided. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Create a hex color and use it as a font color in a document.

```javascript editor-docx
// How do I hex color in a document?

// Hex color and display the result in a document.

const doc = Api.GetDocument();
const color = Api.HexColor('#DECADE');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in hex color.');
paragraph.SetColor(color);
```
