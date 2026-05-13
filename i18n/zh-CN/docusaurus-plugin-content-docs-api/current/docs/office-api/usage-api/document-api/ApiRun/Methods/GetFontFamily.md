# GetFontFamily

从当前文本属性返回字体系列。
如果字体是通过主题设置的，此方法会自动从主题计算字体。

继承自 [ApiTextPr.GetFontFamily](../../ApiTextPr/Methods/GetFontFamily.md)。

## 示例

获取文档中文本的字体系列。

```javascript editor-docx
// How to know the font name of the form.

// Retrieve text properties of the form to find out its font family.

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
textPr.SetFontFamily("Arial");
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let fontFamily = textPr.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
doc.Push(paragraph);
```
