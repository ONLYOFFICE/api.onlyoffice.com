# SetLockValue

设置当前绘图的指定锁定类型的锁定值。

继承自 [ApiDrawing.SetLockValue](../../ApiDrawing/Methods/SetLockValue.md)。

## 示例

防止文档中的绘图被选中。

```javascript editor-docx
// How do I lock a shape so users cannot click or select it in a document?

// Apply a selection lock to a shape and confirm the restriction is active in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
drawing.SetLockValue("noSelect", true);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let lockValue = drawing.GetLockValue("noSelect");
paragraph = Api.CreateParagraph();
paragraph.AddText("This drawing cannot be selected: " + lockValue);
docContent.AddElement(0, paragraph);
```
