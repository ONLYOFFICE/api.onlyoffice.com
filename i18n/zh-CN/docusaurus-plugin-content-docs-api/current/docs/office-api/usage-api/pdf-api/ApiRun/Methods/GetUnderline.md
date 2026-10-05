# GetUnderline

从当前文本属性获取下划线属性。

继承自 [ApiTextPr.GetUnderline](../../ApiTextPr/Methods/GetUnderline.md)。

## 语法

```javascript
expression.GetUnderline();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 中检查文本是否带有下划线装饰。

```javascript editor-pdf
// How do I determine if text is underlined in a PDF?

// Verify the underline status of text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
run.SetUnderline(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const underline = run.GetUnderline();
paragraph.AddText("Underline property: " + underline);
docContent.Push(paragraph);
```
