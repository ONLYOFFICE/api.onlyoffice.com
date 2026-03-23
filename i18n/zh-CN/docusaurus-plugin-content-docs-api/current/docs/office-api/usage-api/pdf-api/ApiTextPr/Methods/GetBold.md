# GetBold

从当前文本属性获取粗体属性。

## 语法

```javascript
expression.GetBold();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何确定文本是否为粗体。

```javascript editor-pdf
// How to know whether a text is set to bold or not.

// Get the text properties of the run and find whether it is bold or not.

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
textPr.SetBold(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const bold = textPr.GetBold();
paragraph.AddText("Bold property: " + bold);
docContent.Push(paragraph);

```
