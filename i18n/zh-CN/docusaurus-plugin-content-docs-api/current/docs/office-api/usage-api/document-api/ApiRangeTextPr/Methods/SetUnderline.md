# SetUnderline

指定文本块的内容显示时在字符正下方有一条线
（小于行中字符上下的所有间距）。

继承自 [ApiTextPr.SetUnderline](../../ApiTextPr/Methods/SetUnderline.md)。

## 示例

指定在文档中当前 run 的内容与字符正下方的线条一起显示（小于行中字符上下的所有间距）。

```javascript editor-docx
// How to underline a text object in a document.

// Create a text run object, underline it with a single line in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");
```
