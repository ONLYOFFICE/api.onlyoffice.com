# SetLanguage

指定在处理文本块内容时将用于检查拼写和语法（如果请求）的语言。

继承自 [ApiTextPr.SetLanguage](../../ApiTextPr/Methods/SetLanguage.md)。

## 示例

指定在文档中处理文本 run 内容时用于检查拼写和语法（如果需要）的语言。

```javascript editor-docx
// How to set a language to the text for grammar checking in a document.

// Create a text run object, change its language to English for grammar check in a document.

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
