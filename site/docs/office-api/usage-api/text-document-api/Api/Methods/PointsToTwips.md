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

This example shows how to convert points to twips.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const twips = Api.PointsToTwips(points);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');
doc.Push(paragraph);

```
