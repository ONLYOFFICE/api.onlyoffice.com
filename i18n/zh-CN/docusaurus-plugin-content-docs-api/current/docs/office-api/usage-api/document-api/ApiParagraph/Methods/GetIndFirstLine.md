# GetIndFirstLine

返回段落首行缩进。

继承自 [ApiParaPr.GetIndFirstLine](../../ApiParaPr/Methods/GetIndFirstLine.md)。

## 示例

读取文档中段落设置的首行缩进值。

```javascript editor-docx
// How do I find out how far the first line of a paragraph is indented in a document?

// Check the exact indent size before adjusting paragraph alignment or reusing the style elsewhere.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndFirstLine(1440);
paragraph.AddText("This is the first paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let indFirstLine = paraPr.GetIndFirstLine();
paragraph = Api.CreateParagraph();
paragraph.AddText("First line indent: " + indFirstLine);
doc.Push(paragraph);
```
