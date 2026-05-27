# GetSlidesCount

返回幻灯片的数量。

## 语法

```javascript
expression.GetSlidesCount();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索演示文稿中的幻灯片总数。

```javascript editor-pptx
// How do I count all the slides in a presentation?

// Show the slide count displayed in a shape on the current slide.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();

const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

const slidesCount = presentation.GetSlidesCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of slides = " + slidesCount);
slide1.AddObject(shape);
```
