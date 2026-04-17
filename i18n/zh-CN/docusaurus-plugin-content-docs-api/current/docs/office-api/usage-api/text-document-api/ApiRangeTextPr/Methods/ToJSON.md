# ToJSON

将 ApiTextPr 对象转换为 JSON 对象。

Inherited from [ApiTextPr.ToJSON](../../ApiTextPr/Methods/ToJSON.md).

## 示例

此示例将 ApiTextPr 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the text properties.

// Convert the text properties to json and add it to the document.

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

