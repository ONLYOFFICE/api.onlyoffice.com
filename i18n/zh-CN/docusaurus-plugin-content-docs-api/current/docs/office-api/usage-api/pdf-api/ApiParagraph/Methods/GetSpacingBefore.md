# GetSpacingBefore

返回当前段落的段前间距值。

## 语法

```javascript
expression.GetSpacingBefore();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例展示如何获取当前段落的段前间距值。

```javascript editor-pdf
// How to get the size of a spacing before a text from a paragraph.

// Return a property of the spacing size before a paragraph.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
const paraPr = paragraph2.GetParaPr();
paraPr.SetSpacingBefore(1440);
docContent.Push(paragraph2);

const spacingBefore = paraPr.GetSpacingBefore();
const paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Spacing before: " + spacingBefore);
docContent.Push(paragraph3);

```
