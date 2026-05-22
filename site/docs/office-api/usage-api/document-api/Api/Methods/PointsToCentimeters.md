# PointsToCentimeters

Converts points to centimeters.

## Syntax

```javascript
expression.PointsToCentimeters(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to centimeters. |

## Returns

number

## Example

Convert a typographic point value to centimeters and display the result in a document.

```javascript editor-docx
// How do I find the centimeter equivalent of a measurement given in points in a document?

// Write out how many centimeters correspond to a specific number of points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
paragraph.AddText(points + ' points are equal to ' + centimeters + ' centimeters.');
doc.Push(paragraph);
```
