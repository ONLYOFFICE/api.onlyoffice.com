# SetShd

指定应用于段落内容的底纹。

Inherited from [ApiParaPr.SetShd](../../ApiParaPr/Methods/SetShd.md).

## 示例

此示例指定应用于段落内容的底纹。

```javascript editor-docx
// How to add shading to the paragraph.

// Apply the clear shading to the paragraph.

let doc = Api.GetDocument();

let myStyle = doc.CreateStyle('My document style');
let paraPr = myStyle.GetParaPr();
paraPr.SetShd('clear', Api.RGB(255, 111, 61));

let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shading to a paragraph.');
paragraph.SetStyle(myStyle);
```

