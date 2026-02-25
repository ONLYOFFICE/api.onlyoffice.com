# PixelsToPoints

Converts pixels to points.

## Syntax

```javascript
expression.PixelsToPoints(px);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to points. |

## Returns

number

## Example

This example shows how to convert pixels to points.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');
doc.Push(paragraph);

```
