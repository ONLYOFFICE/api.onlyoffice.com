# CentimetersToPoints

Converts centimeters to points.

## Syntax

```javascript
expression.CentimetersToPoints(cm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cm | Required | number |  | The number of centimeters to convert to points. |

## Returns

number

## Example

Display the points equivalent of a centimeter value in a document.

```javascript editor-docx
// How do I convert a measurement from centimeters to points in a document?

// Insert the result of a centimeters-to-points conversion as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');
doc.Push(paragraph);
```
