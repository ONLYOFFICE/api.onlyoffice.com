# GetCaps

返回具有当前文本属性的文本是否大写。

继承自 [ApiTextPr.GetCaps](../../ApiTextPr/Methods/GetCaps.md)。

## 语法

```javascript
expression.GetCaps();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 中检查文本是否全部大写。

```javascript editor-pdf
// How do I know if text has uppercase formatting in a PDF?

// Verify the capitalization setting of text in a PDF.

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
run.SetCaps(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const caps = run.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + caps);
docContent.Push(paragraph);
```
