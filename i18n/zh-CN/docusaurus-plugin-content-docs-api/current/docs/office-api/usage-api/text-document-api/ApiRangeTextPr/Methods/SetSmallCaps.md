# SetSmallCaps

指定文本块中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

Inherited from [ApiTextPr.SetSmallCaps](../../ApiTextPr/Methods/SetSmallCaps.md).

## 示例

此示例指定文本块中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。

```javascript editor-docx
// How to make text characters uncapitalized.

// Create a text run object, update its style by making its letters uncapitalized.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSmallCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to small capitalized letters.");
```

