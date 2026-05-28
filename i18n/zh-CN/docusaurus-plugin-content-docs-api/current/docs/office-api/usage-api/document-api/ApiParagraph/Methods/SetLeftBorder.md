# SetLeftBorder

指定将在指定段落周围的页面左侧显示的边框。

继承自 [ApiParaPr.SetLeftBorder](../../ApiParaPr/Methods/SetLeftBorder.md)。

## 示例

在文档中为段落的左侧添加边框。

```javascript editor-docx
// How do I place a visible border on the left edge of a paragraph in a document?

// Decorate a paragraph with a colored left-side border to make it stand out visually.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
```
