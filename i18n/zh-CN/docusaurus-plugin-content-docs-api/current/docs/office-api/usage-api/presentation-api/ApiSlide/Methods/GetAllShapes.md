# GetAllShapes

返回幻灯片中所有形状对象的数组。

## 语法

```javascript
expression.GetAllShapes();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)[]

## 示例

查找演示文稿中幻灯片上的所有形状。

```javascript editor-pptx
// How do I access all the shapes in a slide in a presentation?

// Retrieve the shape objects and modify their dimensions in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(shape);

const allShapes = slide.GetAllShapes();
allShapes[0].SetSize(150 * 36000, 65 * 36000);
```
