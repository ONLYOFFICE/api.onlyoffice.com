# SetSpacingLine

Sets the paragraph line spacing.

If the value of the sLineRule parameter is either "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If  the value of the sLineRule parameter is "auto", then the value of the  nLine parameter will be interpreted as 240ths of a line.

Inherited from [ApiParaPr.SetSpacingLine](../../ApiParaPr/Methods/SetSpacingLine.md).

## Syntax

```javascript
expression.SetSpacingLine(nLine, sLineRule);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) |  | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | "auto" \| "atLeast" \| "exact" |  | The rule that determines the measuring units of the line spacing. |

## Returns

boolean

## Example

Set the line spacing between paragraphs in a presentation.

```javascript editor-pptx
// How do I adjust the spacing between lines of text in a presentation?

// Apply different line spacing values to paragraphs in a presentation.

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
paragraph.SetSpacingLine(2 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 2 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");

paragraph = Api.CreateParagraph();
paragraph.SetSpacingLine(200, "exact");
paragraph.AddText("Paragraph 2. Spacing: exact 10 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
docContent.Push(paragraph);
slide.AddObject(shape);
```
