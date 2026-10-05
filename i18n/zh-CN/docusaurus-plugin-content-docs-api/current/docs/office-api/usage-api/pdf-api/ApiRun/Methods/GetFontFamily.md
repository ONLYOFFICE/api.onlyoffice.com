# GetFontFamily

从当前文本属性返回字体系列。

如果字体是通过主题设置的，此方法会自动从主题计算字体。

继承自 [ApiTextPr.GetFontFamily](../../ApiTextPr/Methods/GetFontFamily.md)。

## 语法

```javascript
expression.GetFontFamily();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 中获取文本的字体名称。

```javascript editor-pdf
// How do I find out what font is used for text in a PDF?

// Read the font family setting of text in a PDF.

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

run.SetFontFamily("Arial");
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontFamily = run.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
docContent.Push(paragraph);
```
