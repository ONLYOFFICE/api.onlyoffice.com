# GetUnderline

从当前文本属性获取下划线属性。

继承自 [ApiTextPr.GetUnderline](../../ApiTextPr/Methods/GetUnderline.md)。

## 示例

检查文档中的文本是否有下划线。

```javascript editor-docx
// How to know whether a text is underlined or not in a document.

// Get the text properties of the run and find whether it is underlined or not in a document.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
textPr = run.GetTextPr();
textPr.SetUnderline(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let underline = textPr.GetUnderline();
paragraph.AddText("Underline property: " + underline);
doc.Push(paragraph);
```
