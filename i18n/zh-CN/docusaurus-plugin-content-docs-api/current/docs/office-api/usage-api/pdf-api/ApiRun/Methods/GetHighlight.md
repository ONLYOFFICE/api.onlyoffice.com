# GetHighlight

从当前文本属性获取高亮属性。

继承自 [ApiTextPr.GetHighlight](../../ApiTextPr/Methods/GetHighlight.md)。

## 语法

```javascript
expression.GetHighlight();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 中检查文本是否突出显示。

```javascript editor-pdf
// How do I determine whether text has highlight color in a PDF?

// Verify the highlight setting of text in a PDF.

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
run.SetHighlight("lightGray");
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const highlight = run.GetHighlight();
paragraph.AddText("Highlight property: " + highlight);
docContent.Push(paragraph);
```
