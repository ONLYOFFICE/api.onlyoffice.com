# GetSelectedText

获取页面上的选定文本

## 语法

```javascript
expression.GetSelectedText();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

提取 PDF 页面上已高亮显示的文本。

```javascript editor-pdf
// Useful for capturing the text selected in a PDF.

// Retrieve what text is currently marked on a page in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let results = page.Search({text: "Lorem selected text", matchCase: true, wholeWords: false});
let quads = results[0];
let firstQuad = quads[0];
let lastQuad = quads[quads.length - 1];
page.SetSelection({start: {x: firstQuad[0], y: firstQuad[1]}, end: {x: lastQuad[2], y: lastQuad[3]}});
console.log(`The selected text is: ${page.GetSelectedText()}`);
```
