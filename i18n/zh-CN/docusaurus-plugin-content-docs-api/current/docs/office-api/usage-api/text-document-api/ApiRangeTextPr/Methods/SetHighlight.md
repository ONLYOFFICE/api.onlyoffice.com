# SetHighlight

指定添加到文本属性并作为背景应用于当前文本块/范围/段落内容的高亮颜色。

Inherited from [ApiTextPr.SetHighlight](../../ApiTextPr/Methods/SetHighlight.md).

## 示例

此示例指定添加到文本属性并作为背景应用于当前文本块/范围/段落内容的高亮颜色。

```javascript editor-docx
// How to color a text object background.

// Create a text run object, add color to its background.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
```

