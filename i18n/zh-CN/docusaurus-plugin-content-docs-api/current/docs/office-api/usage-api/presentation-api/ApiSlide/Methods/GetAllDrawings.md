# GetAllDrawings

返回幻灯片中所有绘图对象的数组。

## 语法

```javascript
expression.GetAllDrawings();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

此示例展示如何获取幻灯片中所有绘图对象的数组。

```javascript editor-pptx
// How to get all drawings from the slide.

// Get all drawings from the slide as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const allDrawings = slide.GetAllDrawings();
const placeholder = Api.CreatePlaceholder("chart");
allDrawings[0].SetPlaceholder(placeholder);

```
