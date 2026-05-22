# GetJc

返回段落内容对齐方式。

继承自 [ApiParaPr.GetJc](../../ApiParaPr/Methods/GetJc.md)。

## 示例

读取文档中应用于段落的文本对齐设置。

```javascript editor-docx
// How do I find out how a paragraph's text is aligned in a document?

// Confirm the alignment type before deciding whether to unify or override it across styles.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paraPr.SetJc("center");
let paraJc = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + paraJc);
doc.Push(paragraph);
```
