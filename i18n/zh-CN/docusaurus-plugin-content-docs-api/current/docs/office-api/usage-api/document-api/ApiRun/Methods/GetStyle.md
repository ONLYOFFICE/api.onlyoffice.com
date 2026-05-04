# GetStyle

获取当前文本属性的样式。

继承自 [ApiTextPr.GetStyle](../../ApiTextPr/Methods/GetStyle.md)。

## 示例

检查文档中的文本是否设置了属性。

```javascript editor-docx
// How to know whether a text's style is changed or not in a document.

// Retrieve text properties of the form and display its style name.

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
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let style = textPr.GetStyle();
paragraph.AddText("Style: " + style.GetName());
doc.Push(paragraph);
```
