# SetSmallCaps

指定文本块中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

继承自 [ApiTextPr.SetSmallCaps](../../ApiTextPr/Methods/SetSmallCaps.md)。

## 示例

指定文本 run 中的所有小写字母字符仅以比指定字体大小小两磅的对应大写字母格式显示。

```javascript editor-docx
// How to make text characters uncapitalized in a document.

// Create a text run object, update its style by making its letters uncapitalized in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSmallCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to small capitalized letters.");
```
