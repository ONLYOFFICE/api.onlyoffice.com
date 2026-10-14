# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run.

## Syntax

```javascript
expression.SetLanguage(langId);
```

`expression` - A variable that represents an [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | Required | string \| null |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". Pass *null* to remove the language. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Set the spell-check language through the text properties of a run in a PDF.

```javascript editor-pdf
// How do I choose the proofing language with text properties in a PDF?

// Get the text properties of a run and assign a language code so the text is checked against the matching dictionary in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetLanguage("en-CA");
paragraph.SetJc("left");
run.AddText("This is a sample text.");
paragraph.AddElement(run);
page.AddObject(shape);
```
