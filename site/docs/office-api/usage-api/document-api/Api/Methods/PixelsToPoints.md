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

Convert a pixel measurement to typographic points and display the result in a document.

```javascript editor-docx
// How do I translate a pixel value into points in a document?

// Write out the point equivalent of a given pixel count as readable text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');
doc.Push(paragraph);
```
