# PointsToEmus

Converts points to EMUs (English Metric Units).

## Syntax

```javascript
expression.PointsToEmus(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to EMUs. |

## Returns

number

## Example

Convert a typographic point value to English metric units and display the result in a document.

```javascript editor-docx
// How do I translate a point measurement into English metric units in a document?

// Show the English metric unit equivalent of a given number of points as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const emus = Api.PointsToEmus(points);
paragraph.AddText(points + ' points are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);
```
