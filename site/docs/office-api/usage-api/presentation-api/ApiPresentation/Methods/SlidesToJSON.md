# SlidesToJSON

Converts the slides from the current ApiPresentation object into the JSON objects.

## Syntax

```javascript
expression.SlidesToJSON(nStart, nStart, bWriteLayout, bWriteMaster, bWriteAllMasLayouts, bWriteTableStyles);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | Optional | boolean | 0 | The index to the start slide. |
| nStart | Optional | boolean | ApiPresentation.GetSlidesCount() - 1 | The index to the end slide. |
| bWriteLayout | Optional | boolean | false | Specifies if the slide layout will be written to the JSON object or not. |
| bWriteMaster | Optional | boolean | false | Specifies if the slide master will be written to the JSON object or not (bWriteMaster is false if bWriteLayout === false). |
| bWriteAllMasLayouts | Optional | boolean | false | Specifies if all child layouts from the slide master will be written to the JSON object or not. |
| bWriteTableStyles | Optional | boolean | false | Specifies whether to write used table styles to the JSON object (true) or not (false). |

## Returns

JSON[]

## Example

This example shows how to convert the slides from the current ApiPresentation object into the JSON objects.

```javascript editor-pptx
// How to convert slides to JSON objects.

// Get JSON representations of each slide from the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const json = presentation.SlidesToJSON(0, 0, true, true, true, true);
const allSlidesFromJSON = Api.FromJSON(json);
const slideFromJSON = allSlidesFromJSON[0];
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
