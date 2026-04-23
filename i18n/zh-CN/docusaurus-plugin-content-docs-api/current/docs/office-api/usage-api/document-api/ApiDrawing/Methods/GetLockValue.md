# GetLockValue

返回当前绘图的指定锁定类型的锁定值。

## 语法

```javascript
expression.GetLockValue(sType);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | 字符串格式的锁定类型。 |

## 返回值

boolean

## 示例

此示例展示如何获取绘图的指定锁定类型的锁定值。

```javascript editor-docx
// How to set lock value of the shape.

// Get a boolean that shows that drawing can be selected or not.

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
