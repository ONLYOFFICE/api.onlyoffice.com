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

This example shows how to create a hex color and use it as a font color.

```javascript editor-docx
const doc = Api.GetDocument();
const color = Api.HexColor('#DECADE');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in hex color.');
paragraph.SetColor(color);

```
