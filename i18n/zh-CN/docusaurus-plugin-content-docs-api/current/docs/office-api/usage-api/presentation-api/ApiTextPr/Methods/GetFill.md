# GetFill

从当前文本属性获取文本颜色。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

此示例演示如何确定文本颜色。

```javascript editor-pptx
// How to know with which color a text is filled.

// Get the text properties of the run and get its font color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetFill(fill);
slide.AddObject(shape);
paragraph = Api.CreateParagraph();

fill = textPr.GetFill();
const type = fill.GetClassType();
paragraph.AddText("Text color type: " + type);
docContent.Push(paragraph);

```
