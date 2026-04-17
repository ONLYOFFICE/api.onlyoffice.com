# SetDoubleStrikeout

指定文本块的内容显示为每个字符都有两条水平线穿过。

Inherited from [ApiTextPr.SetDoubleStrikeout](../../ApiTextPr/Methods/SetDoubleStrikeout.md).

## 示例

此示例指定文本块的内容显示为每个字符都有两条水平线穿过。

```javascript editor-docx
// How to strikethrough a text with two lines.

// Create a text run object, double cross out it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetDoubleStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with two lines using the text properties.");
```

