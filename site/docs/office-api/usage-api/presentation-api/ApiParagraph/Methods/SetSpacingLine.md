# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either \
"atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If \
the value of the sLineRule parameter is "auto", then the value of the \
nLine parameter will be interpreted as 240ths of a line.

## Syntax

```javascript
expression.SetSpacingLine(nLine, sLineRule);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) |  | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | "auto" \| "atLeast" \| "exact" |  | The rule that determines the measuring units of the line spacing. |

## Returns

boolean

## Example

This example sets the paragraph line spacing.

```javascript editor-pptx
// How to set the size of a spacing line from a paragraph properties.

// Change a spacing line size property of a paragraph properties.

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
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
slide.AddObject(shape);

```
