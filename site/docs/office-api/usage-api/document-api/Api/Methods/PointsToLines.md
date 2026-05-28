# PointsToLines

Converts points to lines (1 line = 12 points).

## Syntax

```javascript
expression.PointsToLines(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to lines. |

## Returns

number

## Example

Convert a typographic point value to lines and display the result in a document.

```javascript editor-docx
// How do I find the line equivalent of a measurement given in points in a document?

// Show how many lines correspond to a specific number of points as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const lines = Api.PointsToLines(points);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');
doc.Push(paragraph);
```
