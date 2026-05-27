# SetShd

指定应用于段落内容的底纹。

继承自 [ApiParaPr.SetShd](../../ApiParaPr/Methods/SetShd.md)。

## 示例

在文档中为段落应用背景底纹颜色。

```javascript editor-docx
// How do I fill the background of a paragraph with a color in a document?

// Highlight a paragraph by setting its shading to make it visually distinct from surrounding text.

let doc = Api.GetDocument();

let myStyle = doc.CreateStyle('My document style');
let paraPr = myStyle.GetParaPr();
paraPr.SetShd('clear', Api.RGB(255, 111, 61));

let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shading to a paragraph.');
paragraph.SetStyle(myStyle);
```
