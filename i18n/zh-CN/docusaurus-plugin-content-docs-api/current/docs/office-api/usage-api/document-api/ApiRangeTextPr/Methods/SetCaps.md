# SetCaps

指定文本块中的任何小写字符仅格式化显示为其对应的大写字母。

继承自 [ApiTextPr.SetCaps](../../ApiTextPr/Methods/SetCaps.md)。

## 示例

指定文本 run 中的所有小写字符仅以其对应的大写字母格式显示。

```javascript editor-docx
// How to make text characters capitalized in a document.

// Create a text run object, update its style by making its letters capitalized in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");
```
