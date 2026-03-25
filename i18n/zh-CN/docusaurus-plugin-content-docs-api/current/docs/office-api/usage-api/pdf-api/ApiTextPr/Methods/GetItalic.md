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

此示例演示如何确定文本是否为斜体。

```javascript editor-pdf
// How to know whether a text is set to italic or not.

// Get the text properties of the run and find whether it is italic or not.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
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
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const italic = textPr.GetItalic();
paragraph.AddText("Italic property: " + italic);
docContent.Push(paragraph);

```
