# SetLanguage

指定在处理文本块内容时将用于检查拼写和语法（如果请求）的语言。

Inherited from [ApiTextPr.SetLanguage](../../ApiTextPr/Methods/SetLanguage.md).

## 示例

此示例指定在处理文本块内容时将用于检查拼写和语法（如果请求）的语言。

```javascript editor-docx
// How to set a language to the text for grammar checking.

// Create a text run object, change its language to English for grammar check.

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

