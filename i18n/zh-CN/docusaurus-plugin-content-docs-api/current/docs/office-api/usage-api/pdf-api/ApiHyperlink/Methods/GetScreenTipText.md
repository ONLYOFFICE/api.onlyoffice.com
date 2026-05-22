# GetScreenTipText

返回超链接的屏幕提示文本。

## 语法

```javascript
expression.GetScreenTipText();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索 PDF 中超链接的工具提示文本。

```javascript editor-pdf
// How can I get the screen tip shown for a hyperlink in a PDF?

// Extract the hover message displayed with a hyperlink in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#456789'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
page.AddObject(shape);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);

let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetScreenTipText("ONLYOFFICE for developers");
let screenTipText = hyperlink.GetScreenTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Screen tip text: " + screenTipText);
docContent.Push(paragraph);
```
