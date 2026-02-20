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

This example shows how to convert points to centimeters.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
paragraph.AddText(points + ' points are equal to ' + centimeters + ' centimeters.');
doc.Push(paragraph);

```
