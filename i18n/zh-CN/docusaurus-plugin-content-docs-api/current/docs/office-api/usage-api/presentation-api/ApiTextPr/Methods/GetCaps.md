# GetCaps

返回具有当前文本属性的文本是否大写。

## 语法

```javascript
expression.GetCaps();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何确定文本是否大写。

```javascript editor-pptx
// How to know whether the text letters are uppercase or not.

// Get the text properties of the run and find whether it is capitalized or not.

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
textPr.SetCaps(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const caps = textPr.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + caps);
docContent.Push(paragraph);

```
