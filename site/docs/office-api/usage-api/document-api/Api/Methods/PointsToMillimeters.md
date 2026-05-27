# PointsToMillimeters

Converts points to millimeters.

## Syntax

```javascript
expression.PointsToMillimeters(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to millimeters. |

## Returns

number

## Example

Convert a measurement from points to millimeters in a document.

```javascript editor-docx
// How do I convert points to millimeters in a document?

// Display the millimeter equivalent of a point value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
paragraph.AddText(points + ' points are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
```
