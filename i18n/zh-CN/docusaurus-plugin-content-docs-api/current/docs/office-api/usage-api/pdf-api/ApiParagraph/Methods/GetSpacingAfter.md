# GetSpacingAfter

返回当前段落的段后间距值。

继承自 [ApiParaPr.GetSpacingAfter](../../ApiParaPr/Methods/GetSpacingAfter.md)。

## 语法

```javascript
expression.GetSpacingAfter();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

在 PDF 中查找段落下方的间距。

```javascript editor-pdf
// How do I check the spacing that appears after a paragraph in a PDF?

// Retrieve the amount of space positioned below a paragraph in a PDF.

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
const paragraph1 = docContent.GetElement(0);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph1.SetSpacingAfter(1440);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();

const spacingAfter = paragraph1.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
docContent.Push(paragraph2);
```
