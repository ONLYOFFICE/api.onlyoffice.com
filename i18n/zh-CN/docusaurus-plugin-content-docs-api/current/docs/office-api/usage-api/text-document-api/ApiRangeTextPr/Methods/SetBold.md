# SetBold

为文本字符设置粗体属性。

Inherited from [ApiTextPr.SetBold](../../ApiTextPr/Methods/SetBold.md).

## 示例

此示例为文本字符设置粗体属性。

```javascript editor-docx
// How to make a text bold.

// Get a font object of characters and make it bold.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");
```

