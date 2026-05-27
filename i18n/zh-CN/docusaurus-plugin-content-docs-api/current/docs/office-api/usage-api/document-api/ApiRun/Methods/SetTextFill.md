# SetTextFill

设置当前文本块的文本填充。

继承自 [ApiTextPr.SetTextFill](../../ApiTextPr/Methods/SetTextFill.md)。

## 示例

在文档中用纯色填充艺术字文本。

```javascript editor-docx
// How do I change the fill color of decorative text in a document?

// Give artistic text a distinct appearance by applying a colored fill in a document.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51))));
textPr.SetTextFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
textPr.SetFontFamily("Comic Sans MS");
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", null, null, 0, 150 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);
```
