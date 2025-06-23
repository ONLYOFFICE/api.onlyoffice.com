# SetSpacingBefore

Sets the spacing before the current paragraph. If the value of the isBeforeAuto parameter is true, then 
any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then 
it will be interpreted as false.

## Syntax

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isBeforeAuto | Optional | boolean | false | The true value disables the spacing before the current paragraph. |

## Returns

boolean

## Example

This example sets the spacing before the current paragraph.

```javascript editor-pptx
// How to set the size of a spacing before a text from a paragraph properties.

// Change the size property of a spacing before a paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");

const secondParagraph = Api.CreateParagraph();
const secondParaPr = secondParagraph.GetParaPr();
secondParaPr.SetSpacingBefore(1440);
secondParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
docContent.Push(secondParagraph);
slide.AddObject(shape);

```
