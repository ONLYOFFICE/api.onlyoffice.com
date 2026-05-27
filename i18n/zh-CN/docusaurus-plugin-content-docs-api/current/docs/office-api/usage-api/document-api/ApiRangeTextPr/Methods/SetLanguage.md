# SetLanguage

指定在处理文本块内容时将用于检查拼写和语法（如果请求）的语言。

继承自 [ApiTextPr.SetLanguage](../../ApiTextPr/Methods/SetLanguage.md)。

## 示例

为文档中的文本分配拼写检查语言。

```javascript editor-docx
// How do I tell the editor which language to use when checking text in a document?

// Ensure correct spelling and grammar rules by setting the text language in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetLanguage("en-CA");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
run.SetTextPr(textPr);
paragraph.AddElement(run);
```
