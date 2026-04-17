# SetLeftBorder

指定将在指定段落周围的页面左侧显示的边框。

Inherited from [ApiParaPr.SetLeftBorder](../../ApiParaPr/Methods/SetLeftBorder.md).

## 示例

此示例指定将在指定段落周围的页面左侧显示的边框。

```javascript editor-docx
// How to add border to the left side of the paragraph.

// Add left single border.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
```

