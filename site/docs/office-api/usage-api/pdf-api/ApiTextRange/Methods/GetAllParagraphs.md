# GetAllParagraphs

Returns all Paragraph objects within this range.

## Syntax

```javascript
expression.GetAllParagraphs();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Take every paragraph covered by a text range in a shape on a PDF page.

```javascript editor-pdf
// Lets a single range be processed paragraph by paragraph.

// Make the first of the covered paragraphs bold.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
const secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
const thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

const range = shape.GetTextRange();

const paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold(true);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetAllParagraphs: " + paragraphs.length);
```
