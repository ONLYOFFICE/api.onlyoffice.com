# SetShd

指定应用于当前文本块内容的底纹。

Inherited from [ApiTextPr.SetShd](../../ApiTextPr/Methods/SetShd.md).

## 示例

此示例指定应用于当前文本块内容的底纹。

```javascript editor-docx
// How to set a shading for a text.

// Create a text run object, specify its shading options.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd('clear', Api.HexColor('#ff6f3d'));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");
```

