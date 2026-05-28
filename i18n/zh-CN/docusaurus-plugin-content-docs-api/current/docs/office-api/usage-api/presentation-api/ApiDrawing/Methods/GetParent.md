# GetParent

返回绘图的父对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md) \| [ApiLayout](../../ApiLayout/ApiLayout.md) \| [ApiMaster](../../ApiMaster/ApiMaster.md) \| null

## 示例

查找演示文稿中形状的父容器。

```javascript editor-pptx
// How do I locate what an object belongs to in a presentation?

// Identify the parent element that holds a shape in a presentation.

const presentation = Api.GetPresentation();

const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

slide.RemoveAllObjects();
slide.AddObject(shape);
const parent = shape.GetParent();
const sType = parent.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type of the shape parent = " + sType);
```
