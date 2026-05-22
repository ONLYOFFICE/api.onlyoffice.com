# PointsToInches

Converts points to inches.

## Syntax

```javascript
expression.PointsToInches(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to inches. |

## Returns

number

## Example

Convert a typographic point value to inches and display the result in a document.

```javascript editor-docx
// How do I find the inch equivalent of a measurement given in points in a document?

// Write out the inch value that corresponds to a specific number of points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const inches = Api.PointsToInches(points);
paragraph.AddText(points + ' points are equal to ' + inches + ' inches.');
doc.Push(paragraph);
```
