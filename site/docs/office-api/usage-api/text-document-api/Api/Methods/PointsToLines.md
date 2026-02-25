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

This example shows how to convert points to lines.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const lines = Api.PointsToLines(points);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');
doc.Push(paragraph);

```
