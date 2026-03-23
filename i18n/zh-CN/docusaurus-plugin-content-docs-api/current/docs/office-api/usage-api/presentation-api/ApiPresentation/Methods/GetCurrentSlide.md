# GetCurrentSlide

返回当前幻灯片。

## 语法

```javascript
expression.GetCurrentSlide();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)

## 示例

此示例演示如何获取当前幻灯片。

```javascript editor-pptx
// How to get a current slide as an object.

// Get current working slide and update its content.

const presentation = Api.GetPresentation();
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

```
