# ToJSON

Converts the ApiDrawing object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the shape into JSON.

```javascript editor-pptx playground
// How to convert a drawing object to a JSON object.

// Get a shape object from a slide and convert to JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);

const json = drawing.ToJSON();
const drawingFromJSON = Api.FromJSON(json);
drawingFromJSON.SetPosition(608400, 1267200);
drawingFromJSON.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawingFromJSON);

```
