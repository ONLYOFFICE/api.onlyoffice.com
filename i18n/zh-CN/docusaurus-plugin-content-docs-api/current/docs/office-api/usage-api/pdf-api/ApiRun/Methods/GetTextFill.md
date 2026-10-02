# GetTextFill

从当前文本属性获取文本填充。

继承自 [ApiTextPr.GetTextFill](../../ApiTextPr/Methods/GetTextFill.md)。

## 语法

```javascript
expression.GetTextFill();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

在 PDF 中获取文本所应用的文本颜色。

```javascript editor-pdf
// How do I find out the text color in a PDF?

// Read the fill color settings of text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
run.SetTextFill(fill);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
fill = run.GetTextFill();
const type = fill.GetClassType();
paragraph.AddText("Text fill type: " + type);
docContent.Push(paragraph);
```
