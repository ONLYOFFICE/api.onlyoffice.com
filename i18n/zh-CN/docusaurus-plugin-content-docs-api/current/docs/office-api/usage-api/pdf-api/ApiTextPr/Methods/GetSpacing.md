# GetSpacing

从当前文本属性获取文本间距，以磅的二十分之一为单位。

## 语法

```javascript
expression.GetSpacing();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例演示如何确定文本的间距大小。

```javascript editor-pdf
// How to know a text spacing.

// Get the text properties of the run and display its spacing size.

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
textPr.SetSpacing(80);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const spacing = textPr.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
docContent.Push(paragraph);

```
