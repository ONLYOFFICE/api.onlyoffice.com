# GetFontSize

从当前文本属性获取字体大小。

## 语法

```javascript
expression.GetFontSize();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[hps](../../Enumeration/hps.md)

## 示例

此示例演示如何确定文本字体大小。

```javascript editor-pptx
// How to know font size of a text run.

// Get the text properties of the run and display its font size.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
const textPr = run.GetTextPr();
textPr.SetFontSize(60);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontSize = textPr.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
docContent.Push(paragraph);

```
