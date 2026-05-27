# ToJSON

将 ApiTextPr 对象转换为 JSON 对象。

继承自 [ApiTextPr.ToJSON](../../ApiTextPr/Methods/ToJSON.md)。

## 示例

将文本格式设置导出为 JSON 并在文档中重新应用。

```javascript editor-docx
// How do I serialize text formatting so it can be restored and reused in a document?

// Save and reload a set of text properties through a JSON snapshot in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let json = textPr.ToJSON(true);
let textPrFromJSON = Api.FromJSON(json);
textPrFromJSON.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
paragraph.SetTextPr(textPrFromJSON);
```
