# GetLockValue

返回当前绘图的指定锁定类型的锁定值。

继承自 [ApiDrawing.GetLockValue](../../ApiDrawing/Methods/GetLockValue.md)。

## 示例

读取绘图的锁定值以检查文档中的选择是否受限。

```javascript editor-docx
// How do I find out if a drawing is locked against selection in a document?

// Apply a no-select lock to a shape and confirm the setting is active in a document.

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
