# SetFontSize

设置当前文本块字符的字体大小。

Inherited from [ApiTextPr.SetFontSize](../../ApiTextPr/Methods/SetFontSize.md).

## 示例

此示例设置当前文本块字符的字体大小。

```javascript editor-docx
// How to change the text font size.

// Create a text run object, resize its font.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
```

