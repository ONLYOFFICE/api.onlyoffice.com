# GetCurSlideIndex

返回当前幻灯片的索引。

## 语法

```javascript
expression.GetCurSlideIndex();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取当前幻灯片的索引。

```javascript editor-pptx
// How to find out a position index of a current slide.

// Get current working slide index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const currentSlideIndex = presentation.GetCurSlideIndex();
paragraph.AddText("Current Slide Index = " + currentSlideIndex);
slide.AddObject(shape);

```
