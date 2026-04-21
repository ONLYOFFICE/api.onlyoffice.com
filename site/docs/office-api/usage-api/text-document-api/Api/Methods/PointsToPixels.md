# PointsToPixels

Converts points to pixels.

## Syntax

```javascript
expression.PointsToPixels(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to pixels. |

## Returns

number

## Example

Convert points to pixels in a document.

```javascript editor-docx
// How to convert points to pixels in a document?

// Convert points to pixels using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const pixels = Api.PointsToPixels(points);
paragraph.AddText(points + ' points are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);
```
