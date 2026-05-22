# GetSmallCaps

返回具有当前文本属性的文本是否显示为比实际字体大小小两磅的大写字母。

继承自 [ApiTextPr.GetSmallCaps](../../ApiTextPr/Methods/GetSmallCaps.md)。

## 示例

确定文档中的文本运行是否格式化为小型大写字母。

```javascript editor-docx
// How do I check if a piece of text uses small caps formatting in a document?

// Verify whether lowercase letters are displayed as reduced capitals in a text run in a document.

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
textPr.SetSmallCaps(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let smallCaps = textPr.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + smallCaps);
doc.Push(paragraph);
```
