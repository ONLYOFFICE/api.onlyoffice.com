# GetParentSlide

返回绘图的父幻灯片。

## 语法

```javascript
expression.GetParentSlide();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## 示例

此示例演示如何获取绘图的父幻灯片。

```javascript editor-pptx
// How to get a parent slide of a slide shape.

// Get a parent slide knowing a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

slide.RemoveAllObjects();
slide.AddObject(shape);

const parent = shape.GetParentSlide();
const sType = parent.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type of the shape parent = " + sType);

```
