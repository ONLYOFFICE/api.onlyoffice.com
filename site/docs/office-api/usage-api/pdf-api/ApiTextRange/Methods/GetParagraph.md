# GetParagraph

Returns the paragraph at the given index within this range. Returns null if the index is out of bounds.

## Syntax

```javascript
expression.GetParagraph(index);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | No description provided. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Take one paragraph covered by a text range in a shape on a PDF page.

```javascript editor-pdf
// A range may span several paragraphs, which are addressed by index.

// Append text to the second paragraph of the range and make it bold.

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

const secondParagraph = range.GetParagraph(1);
secondParagraph.AddText(" (edited)");
secondParagraph.SetBold(true);
```
