# PointsToTwips

Converts points to twips.

## Syntax

```javascript
expression.PointsToTwips(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to twips. |

## Returns

number

## Example

Convert a measurement from points to twips in a document.

```javascript editor-docx
// How do I convert points to twips in a document?

// Display the twip equivalent of a point value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const twips = Api.PointsToTwips(points);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');
doc.Push(paragraph);
```
