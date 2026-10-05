# SetSpacingBefore

Sets the spacing before the current paragraph.

If the value of the isBeforeAuto parameter is true, then any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then  it will be interpreted as false.

Inherited from [ApiParaPr.SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md).

## Syntax

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isBeforeAuto | Optional | boolean | false | The true value disables the spacing before the current paragraph. |

## Returns

boolean

## Example

Add space before a paragraph in a presentation.

```javascript editor-pptx
// How do I increase the gap between paragraphs in a presentation?

// Control the top margin of a paragraph by setting space before in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");

paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph.SetSpacingBefore(1440);
docContent.Push(paragraph);
slide.AddObject(shape);
```
