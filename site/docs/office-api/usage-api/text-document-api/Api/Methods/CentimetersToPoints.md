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

Convert centimeters to points in a document.

```javascript editor-docx
// How to convert centimeters to points in a document?

// Convert centimeters to points using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');
doc.Push(paragraph);
```
