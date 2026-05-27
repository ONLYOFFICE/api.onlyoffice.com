# GetOutLine

从当前文本属性获取文本轮廓。

## 语法

```javascript
expression.GetOutLine();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md)

## 示例

检查演示文稿中的文本是否应用了轮廓效果。

```javascript editor-pptx
// How do I find out if text has an outline in a presentation?

// Read the outline property of text to see if a stroke style is applied in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
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
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
textPr.SetOutLine(stroke);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
stroke = textPr.GetOutLine();
const type = stroke.GetClassType();
paragraph.AddText("Text outline type: " + type);
docContent.Push(paragraph);
```
