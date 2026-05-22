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

Create a custom color from red, green, and blue values and apply it to text in a document.

```javascript editor-docx
// How do I set text color using red, green, and blue values in a document?

// Color paragraph text with a specific RGB combination in a document.

const doc = Api.GetDocument();
const color = Api.RGB(186, 218, 85);
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in RGB color.');
paragraph.SetColor(color);
```
