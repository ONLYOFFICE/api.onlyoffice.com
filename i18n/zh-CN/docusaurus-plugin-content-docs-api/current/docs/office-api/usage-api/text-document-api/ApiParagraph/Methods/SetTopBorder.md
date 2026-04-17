# SetTopBorder

指定在具有相同段落边框设置的一组段落上方显示的边框。
💡 连续的相同样式段落被视为一个整体，因此边框添加到整个块而不是块中的每个段落。

Inherited from [ApiParaPr.SetTopBorder](../../ApiParaPr/Methods/SetTopBorder.md).

## 示例

此示例指定在具有相同段落边框设置的一组段落上方显示的边框。

```javascript editor-docx
// Set top border to the paragraph.

// Border with single line the text.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border above it.");
```

