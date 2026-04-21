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

Convert centimeters to points in a PDF document.

```javascript editor-pdf
// How to convert centimeters to points in a PDF document?

// Convert centimeters to points using the PDF document API.

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
```
