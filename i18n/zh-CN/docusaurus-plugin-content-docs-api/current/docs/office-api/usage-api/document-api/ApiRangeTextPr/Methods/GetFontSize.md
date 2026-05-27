# GetFontSize

从当前文本属性获取字体大小。

继承自 [ApiTextPr.GetFontSize](../../ApiTextPr/Methods/GetFontSize.md)。

## 示例

读取文档中应用于文本运行的字体大小。

```javascript editor-docx
// How do I find out what font size is set on a piece of text in a document?

// Inspect a text run to confirm the current character size used in a document.

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
textPr.SetFontSize(30);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let fontSize = textPr.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
doc.Push(paragraph);
```
