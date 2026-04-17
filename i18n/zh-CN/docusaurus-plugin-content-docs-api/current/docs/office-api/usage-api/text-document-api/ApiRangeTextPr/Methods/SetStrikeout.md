# SetStrikeout

指定文本块的内容显示为中间有一条水平线穿过。

Inherited from [ApiTextPr.SetStrikeout](../../ApiTextPr/Methods/SetStrikeout.md).

## 示例

此示例指定当前文本块的内容显示为中间有一条水平线穿过。

```javascript editor-docx
// How to strike out a text with one line.

// Create a text run object, cross out it.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetStrikeout(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text struck out with a single line.");
```

