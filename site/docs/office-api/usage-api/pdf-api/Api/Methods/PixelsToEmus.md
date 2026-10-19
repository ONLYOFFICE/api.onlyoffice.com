# PixelsToEmus

Converts pixels to EMUs (English Metric Units).

## Syntax

```javascript
expression.PixelsToEmus(px);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to EMUs. |

## Returns

number

## Example

Convert pixels to english metric units in a PDF document.

```javascript editor-pdf
// The API method performs measurement unit conversion.

// The result is displayed in a shape text element.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);
```
