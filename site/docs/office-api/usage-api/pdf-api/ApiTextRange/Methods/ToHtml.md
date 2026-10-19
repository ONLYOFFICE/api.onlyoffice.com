# ToHtml

Converts the text range to HTML.

## Syntax

```javascript
expression.ToHtml(options);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | The HTML conversion options. |

## Returns

string

## Example

Export a part of a paragraph as an HTML string in a PDF document.

```javascript editor-pdf
// A text range limits the HTML export to the characters between its start and end positions.

// Convert the end of a sentence with its bold words to HTML and show the markup in a second paragraph of the shape on a PDF page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Convert only ");
const boldRun = paragraph.AddText("this part");
boldRun.SetBold(true);

const range = paragraph.GetTextRange(8, 22);
const html = range.ToHtml({"RenderHTMLTags": true});
const htmlParagraph = Api.CreateParagraph();
htmlParagraph.AddText("HTML output: " + html.trim());
docContent.Push(htmlParagraph);
```
