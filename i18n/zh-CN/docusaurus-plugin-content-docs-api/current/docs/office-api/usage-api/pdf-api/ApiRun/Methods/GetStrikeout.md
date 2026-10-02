# GetStrikeout

从当前文本属性获取删除线属性。

继承自 [ApiTextPr.GetStrikeout](../../ApiTextPr/Methods/GetStrikeout.md)。

## 语法

```javascript
expression.GetStrikeout();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查 PDF 中的文本是否有删除线。

```javascript editor-pdf
// How do I see if text is formatted with strikethrough in a PDF?

// Determine whether strikethrough formatting is applied to text in a PDF.

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
run.SetStrikeout(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const strikeout = run.GetStrikeout();
paragraph.AddText("Strikeout property: " + strikeout);
docContent.Push(paragraph);
```
