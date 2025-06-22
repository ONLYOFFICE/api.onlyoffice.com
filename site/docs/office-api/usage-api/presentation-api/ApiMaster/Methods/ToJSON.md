# ToJSON

Converts the ApiMaster object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteTableStyles);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteTableStyles | Optional | boolean | false | Specifies whether to write used table styles to the JSON object (true) or not (false). |

## Returns

JSON

## Example

This example converts the ApiMaster object into the JSON object.

```javascript editor-pptx
// How to convert a slide master object to a JSON object.

// Get a slide master object from a slide and convert to JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const json = master.ToJSON(true);
const masterFromJSON = Api.FromJSON(json);
const type = masterFromJSON.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + type);
slide.AddObject(shape);

```
