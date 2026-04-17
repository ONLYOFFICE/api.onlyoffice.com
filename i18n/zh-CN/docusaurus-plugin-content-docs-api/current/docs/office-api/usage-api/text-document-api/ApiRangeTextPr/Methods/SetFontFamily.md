# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

Inherited from [ApiTextPr.SetFontFamily](../../ApiTextPr/Methods/SetFontFamily.md).

## 示例

此示例使用指定的字体系列设置所有 4 个字体槽。

```javascript editor-docx
// How to change the text font family.

// Create a text run object and set the "Comic Sans MS" font faminy to it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");
```

