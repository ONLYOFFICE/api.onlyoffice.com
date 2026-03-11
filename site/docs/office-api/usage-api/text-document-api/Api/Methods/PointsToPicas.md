# PointsToPicas

Converts points to picas (1 pica = 12 points).

## Syntax

```javascript
expression.PointsToPicas(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to picas. |

## Returns

number

## Example

This example shows how to convert points to picas.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 42;
const picas = Api.PointsToPicas(points);
paragraph.AddText(points + ' points are equal to ' + picas + ' picas.');
doc.Push(paragraph);

```
