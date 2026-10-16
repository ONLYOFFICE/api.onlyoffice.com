# GetFill

从当前图形对象获取填充格式属性。

继承自 [ApiDrawing.GetFill](../../ApiDrawing/Methods/GetFill.md)。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

在演示文稿中通过基础 ApiDrawing 接口获取绘图对象的填充格式属性。

```javascript editor-pptx
// GetFill returns the ApiFill applied to any graphic object on a slide, or null when the object has no fill.

// Read back the fill type of a filled rectangle and show it inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const currentFill = drawing.GetFill();
if (currentFill) {
	drawing.GetContent().GetElement(0).AddText("Fill type: " + currentFill.GetType());
}
```
