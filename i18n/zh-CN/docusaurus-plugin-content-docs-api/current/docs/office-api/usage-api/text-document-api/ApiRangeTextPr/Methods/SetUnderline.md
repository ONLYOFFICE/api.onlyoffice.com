# SetUnderline

指定文本块的内容显示时在字符正下方有一条线
（小于行中字符上下的所有间距）。

Inherited from [ApiTextPr.SetUnderline](../../ApiTextPr/Methods/SetUnderline.md).

## 示例

此示例指定当前文本块的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。

```javascript editor-docx
// How to underline a text object.

// Create a text run object, underline it with a single line.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");
```

