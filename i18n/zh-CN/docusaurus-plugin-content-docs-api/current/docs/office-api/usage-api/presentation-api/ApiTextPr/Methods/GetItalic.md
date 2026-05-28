# GetItalic

从当前文本属性获取斜体属性。

## 语法

```javascript
expression.GetItalic();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查演示文稿中的文本是否格式化为斜体。

```javascript editor-pptx
// How do I determine if text uses italic formatting in a presentation?

// Read the italic property of text to see if the formatting is applied in a presentation.

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
textPr.SetItalic(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const italic = textPr.GetItalic();
paragraph.AddText("Italic property: " + italic);
docContent.Push(paragraph);
```
