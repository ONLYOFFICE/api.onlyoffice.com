# RemoveAllObjects

从当前幻灯片中移除所有对象。

## 语法

```javascript
expression.RemoveAllObjects();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例从当前幻灯片中移除所有对象。

```javascript editor-pptx
// How to remove all elements from the slide.

// Get a current slide, remove all its objects and add a new one.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);

const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
fill = Api.CreateRadialGradientFill([gs1, gs2]);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape("flowChartMagneticTape", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("All objects were removed from this slide before adding this shape.");
slide.AddObject(shape);

```
