# GetFill

从当前图形对象获取填充格式属性。

继承自 [ApiDrawing.GetFill](../../ApiDrawing/Methods/GetFill.md)。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

在 PDF 中通过 ApiDrawing 基础接口获取绘图对象的填充格式属性。

```javascript editor-pdf
// GetFill returns the ApiFill applied to any graphic object in a PDF, or null when the object has no fill.

// Read back the fill type of a filled rectangle and show it inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const currentFill = drawing.GetFill();
if (currentFill) {
	drawing.GetContent().GetElement(0).AddText("Fill type: " + currentFill.GetType());
}
```
