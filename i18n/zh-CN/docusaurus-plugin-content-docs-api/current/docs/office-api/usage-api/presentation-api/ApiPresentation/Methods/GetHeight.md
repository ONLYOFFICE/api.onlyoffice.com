# GetHeight

返回以英制单位表示的演示文稿高度。

## 语法

```javascript
expression.GetHeight();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

此示例演示如何获取以英制单位表示的演示文稿高度。

```javascript editor-pptx
// How to get a height of the presentation.

// Get a height of the ApiPresentation object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const height = presentation.GetHeight();
paragraph.AddText("Height = " + height);
slide.AddObject(shape);

```
