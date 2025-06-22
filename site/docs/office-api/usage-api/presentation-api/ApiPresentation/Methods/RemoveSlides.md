# RemoveSlides

Removes a range of slides from the presentation.
Deletes all the slides from the presentation if no parameters are specified.

## Syntax

```javascript
expression.RemoveSlides(nStart, nCount);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | Optional | Number | 0 | The starting position for the deletion range. |
| nCount | Optional | Number | ApiPresentation.GetSlidesCount() | The number of slides to delete. |

## Returns

boolean

## Example

This example shows how to remove a range of slides from the presentation.

```javascript editor-pptx
// How to remove the slides from the presentation.

// Delete a range of the ApiSlide objects from the presentation.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const bgFill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(bgFill);

presentation.AddSlide(slide);
presentation.RemoveSlides(0, 1);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, oStroke);
oShape.SetPosition(608400, 1267200);

const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
const sClassType = presentation.GetClassType();
oParagraph.AddText("A slide with no background was removed from this presentation.");
slide.AddObject(oShape);

```
