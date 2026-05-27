# GetKeepNext

返回当前段落的与下段同页值。

继承自 [ApiParaPr.GetKeepNext](../../ApiParaPr/Methods/GetKeepNext.md)。

## 示例

读取文档中段落是否设置为与下一段保持在同一页上。

```javascript editor-docx
// How do I check if a paragraph is configured to stay with the next paragraph in a document?

// Verify the keep-with-next setting before adjusting page break behavior around headings or captions.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetKeepNext(true);
paragraph.AddText("This is a paragraph kept on the same page as the following paragraph.");
let keepNext = paraPr.GetKeepNext();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Keep next: " + keepNext);
doc.Push(paragraph2);
```
