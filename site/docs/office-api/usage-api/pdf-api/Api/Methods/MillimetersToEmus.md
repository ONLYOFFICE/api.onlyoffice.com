# MillimetersToEmus

Converts millimeters to English Metric Units (EMUs).
The result is an integer value.

## Syntax

```javascript
expression.MillimetersToEmus(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | [mm](../../Enumeration/mm.md) |  | The value in millimeters. |

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

Convert millimeters to emus in a PDF document.

```javascript editor-pdf
// The API method performs measurement unit conversion.

// The result is displayed in a shape text element.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
```
