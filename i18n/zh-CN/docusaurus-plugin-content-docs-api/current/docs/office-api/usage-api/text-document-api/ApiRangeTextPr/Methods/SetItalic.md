# SetItalic

为文本字符设置斜体属性。

Inherited from [ApiTextPr.SetItalic](../../ApiTextPr/Methods/SetItalic.md).

## 示例

此示例为文本字符设置斜体属性。

```javascript editor-docx
// How to make a text italic.

// Create a text run object, change its properties by making it italic.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");
```

