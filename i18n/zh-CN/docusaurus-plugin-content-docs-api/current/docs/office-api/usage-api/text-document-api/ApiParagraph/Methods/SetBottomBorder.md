# SetBottomBorder

指定在具有相同段落边框设置的一组段落下方显示的边框。
💡 连续的相同样式段落被视为一个整体，因此边框添加到
整个块而不是块中的每个段落。

Inherited from [ApiParaPr.SetBottomBorder](../../ApiParaPr/Methods/SetBottomBorder.md).

## 示例

此示例指定在具有相同段落边框设置的一组段落下方显示的边框。

```javascript editor-docx
// Add the bottom border to the paragraph.

// Get the first paragraph and set its border.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBottomBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border below it.");
```

