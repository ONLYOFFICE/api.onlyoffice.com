# GetIndFirstLine

返回段落首行缩进。

继承自 [ApiParaPr.GetIndFirstLine](../../ApiParaPr/Methods/GetIndFirstLine.md)。

## 语法

```javascript
expression.GetIndFirstLine();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| undefined

## 示例

在 PDF 中检查段落的首行缩进间距。

```javascript editor-pdf
// How do I find the first line indentation of a paragraph in a PDF?

// Retrieve the indent distance for the first line of a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndFirstLine(1440);

const firstLineIndentation = paragraph.GetIndFirstLine();
paragraph = Api.CreateParagraph();
paragraph.AddText("First line indent: " + firstLineIndentation);
docContent.Push(paragraph);
```
