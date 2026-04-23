# CreateTextPr

创建空的文本属性。

## 语法

```javascript
expression.CreateTextPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例演示如何创建文本属性并使用它。

```javascript editor-pptx
// How to change text style, size and font.

// Change text properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const textPr = Api.CreateTextPr();
textPr.SetFontSize(50);
textPr.SetBold(true);
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
const run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 25 points and the font weight set to bold.");
run.SetTextPr(textPr);
paragraph.AddElement(run);
docContent.Push(paragraph);
slide.AddObject(shape);

```
