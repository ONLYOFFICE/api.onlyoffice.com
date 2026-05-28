# GetBold

从当前文本属性获取粗体属性。

继承自 [ApiTextPr.GetBold](../../ApiTextPr/Methods/GetBold.md)。

## 示例

检查文档中的文本是否应用了粗体格式。

```javascript editor-docx
// How do I find out if a piece of text has bold formatting turned on in a document?

// Read the bold state of text to verify its current formatting in a document.

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
textPr.SetBold(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let bold = textPr.GetBold();
paragraph.AddText("Bold property: " + bold);
doc.Push(paragraph);
```
