# GetHighlight

从当前文本属性获取高亮属性。

继承自 [ApiTextPr.GetHighlight](../../ApiTextPr/Methods/GetHighlight.md)。

## 示例

获取文档中文本的突出显示属性。

```javascript editor-docx
// How to know the highlight type of the form.

// Retrieve text properties of the form to find out its highlight type.

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
textPr.SetHighlight("lightGray");
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let highlight = textPr.GetHighlight();
paragraph.AddText("Highlight property: " + highlight);
doc.Push(paragraph);
```
