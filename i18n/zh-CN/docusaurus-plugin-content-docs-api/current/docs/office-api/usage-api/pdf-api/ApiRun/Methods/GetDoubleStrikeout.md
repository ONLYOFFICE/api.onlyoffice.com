# GetDoubleStrikeout

从当前文本属性获取双删除线属性。

继承自 [ApiTextPr.GetDoubleStrikeout](../../ApiTextPr/Methods/GetDoubleStrikeout.md)。

## 语法

```javascript
expression.GetDoubleStrikeout();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 中检查文本是否带有双删除线。

```javascript editor-pdf
// How do I determine if text is crossed out with two lines in a PDF?

// Verify the double strikethrough setting of text in a PDF.

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
run.SetDoubleStrikeout(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const doubleStrikeout = run.GetDoubleStrikeout();
paragraph.AddText("Double strikeout property: " + doubleStrikeout);
docContent.Push(paragraph);
```
