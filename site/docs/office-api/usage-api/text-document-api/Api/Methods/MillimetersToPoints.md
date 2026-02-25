# MillimetersToPoints

Converts millimeters to points.

## Syntax

```javascript
expression.MillimetersToPoints(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | number |  | The number of millimeters to convert to points. |

## Returns

number

## Example

This example shows how to convert millimeters to points.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + points + ' points.');
doc.Push(paragraph);

```
