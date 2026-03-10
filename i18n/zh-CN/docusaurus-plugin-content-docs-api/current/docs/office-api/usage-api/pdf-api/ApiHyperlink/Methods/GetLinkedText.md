# GetLinkedText

返回超链接地址。

## 语法

```javascript
expression.GetLinkedText();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取超链接地址。

```javascript editor-pdf
// How to get the raw link of the hyperlink.

// Add a hyperlink to the paragraph and show its address as a text.

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
hyperlink.SetLink("https://api.onlyoffice.com/");
let linkedText = hyperlink.GetLinkedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Linked text: " + linkedText);
docContent.Push(paragraph);
```
