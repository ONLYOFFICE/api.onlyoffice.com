# RGB

Creates an RGB color from red, green and blue components.

## Syntax

```javascript
expression.RGB(r, g, b);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red component (0-255). |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green component (0-255). |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue component (0-255). |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Create a color in RGB format and use it as a font color in a document.

```javascript editor-docx
// How can I r g b in a document?

// R g b in a document using the editor API in a document.

const doc = Api.GetDocument();
const color = Api.RGB(186, 218, 85);
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in RGB color.');
paragraph.SetColor(color);
```
