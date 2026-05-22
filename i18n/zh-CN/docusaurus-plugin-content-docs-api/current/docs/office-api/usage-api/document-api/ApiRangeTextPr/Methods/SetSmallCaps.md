# SetSmallCaps

指定文本块中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

继承自 [ApiTextPr.SetSmallCaps](../../ApiTextPr/Methods/SetSmallCaps.md)。

## 示例

在文档中将小写字母显示为小型大写字母。

```javascript editor-docx
// How do I make text appear in small capitals without retyping it in a document?

// Give text a refined look by rendering all letters as reduced-size capitals in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSmallCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to small capitalized letters.");
```
