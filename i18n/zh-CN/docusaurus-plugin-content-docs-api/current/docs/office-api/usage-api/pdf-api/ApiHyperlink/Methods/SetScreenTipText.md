# SetScreenTipText

设置超链接的屏幕提示文本。

## 语法

```javascript
expression.SetScreenTipText(sScreenTipText);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTipText | 必需 | string |  | 超链接的屏幕提示文本。 |

## 返回值

boolean

## 示例

定义鼠标悬停在 PDF 中超链接上时显示的文本。

```javascript editor-pdf
// How do I set the message displayed for a link in a PDF?

// Specify a tooltip for a hyperlink in a PDF.

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
