# SetRightBorder

指定将在指定段落周围的页面右侧显示的边框。

Inherited from [ApiParaPr.SetRightBorder](../../ApiParaPr/Methods/SetRightBorder.md).

## 示例

此示例指定将在指定段落周围的页面右侧显示的边框。

```javascript editor-docx
// How to add border to the right side of the paragraph.

// Add right single border.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its right side.");
```

