# GetText

Returns the paragraph text.

## Syntax

```javascript
expression.GetText(options);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | object |  | Options for formatting the returned text. |
| options.Numbering | Optional | boolean | false | Defines if the resulting string will include numbering or not. |
| options.Math | Optional | boolean | false | Defines if the resulting string will include mathematical expressions or not. |
| options.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. Any string can be used. The default separator is "\r". |
| options.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string (does not apply to numbering). Any string can be used. The default symbol is "\t". |

## Returns

string

## Example

Read the text content of a paragraph inside a shape in a presentation.

```javascript editor-pptx
// How do I retrieve the plain text of a paragraph inside a shape in a presentation?

// Extract a paragraph's text and display it in a second paragraph within the same shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Sample paragraph text.");
const text = paragraph.GetText();
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Paragraph text: " + text);
docContent.Push(infoParagraph);
slide.AddObject(shape);
```
