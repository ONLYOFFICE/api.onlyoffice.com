# ToJSON

Converts the ApiSlide object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteLayout, bWriteMaster, bWriteAllMasLayouts, bWriteTableStyles);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteLayout | Optional | boolean | false | Specifies if the slide layout will be written to the JSON object or not. |
| bWriteMaster | Optional | boolean | false | Specifies if the slide master will be written to the JSON object or not (bWriteMaster is false if bWriteLayout === false). |
| bWriteAllMasLayouts | Optional | boolean | false | Specifies if all child layouts from the slide master will be written to the JSON object or not. |
| bWriteTableStyles | Optional | boolean | false | Specifies whether to write used table styles to the JSON object (true) or not (false). |

## Returns

JSON

## Example

This example converts the ApiSlide object into the JSON object.

```javascript editor-pptx playground
// How to convert a slide object to a JSON object.

// Get a slide by its index and convert it to JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const json = slide.ToJSON(true, true, true, true);
const slideFromJSON = Api.FromJSON(json);
presentation.AddSlide(slideFromJSON);
const classType = slideFromJSON.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type = " + classType);

```
