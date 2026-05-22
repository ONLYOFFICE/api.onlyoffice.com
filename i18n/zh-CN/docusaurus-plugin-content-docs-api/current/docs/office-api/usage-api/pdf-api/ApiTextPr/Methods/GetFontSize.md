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

从 PDF 读取文本大小值。

```javascript editor-pdf
// How do I check what font size is used for text in a PDF?

// Retrieve the font size measurement from text properties in a PDF.

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
const textPr = run.GetTextPr();
textPr.SetFontSize(60);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontSize = textPr.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
docContent.Push(paragraph);
```
