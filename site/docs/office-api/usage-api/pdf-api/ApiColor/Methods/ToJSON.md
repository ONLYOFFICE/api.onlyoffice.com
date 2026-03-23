# ToJSON

Converts the ApiColor object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to convert a shape fill color to JSON.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.RGB(64, 128, 192);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Color JSON:\n' + color.ToJSON());
paragraph.AddElement(run);
page.AddObject(shape);

```
