# GetJc

返回段落内容对齐方式。

继承自 [ApiParaPr.GetJc](../../ApiParaPr/Methods/GetJc.md)。

## 语法

```javascript
expression.GetJc();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"left" \| "right" \| "both" \| "center" \| undefined

## 示例

在 PDF 中查看段落中文本的对齐方式。

```javascript editor-pdf
// How do I check the text alignment of a paragraph in a PDF?

// Retrieve the alignment setting from a paragraph in a PDF.

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
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");

const sJc = paragraph.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + sJc);
docContent.Push(paragraph);
```
