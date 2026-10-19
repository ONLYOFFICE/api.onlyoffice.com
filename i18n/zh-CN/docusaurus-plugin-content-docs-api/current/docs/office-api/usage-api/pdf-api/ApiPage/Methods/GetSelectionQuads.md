# GetSelectionQuads

获取页面选择四边形

## 语法

```javascript
expression.GetSelectionQuads();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Quad](../../Enumeration/Quad.md)[]

## 示例

获取 PDF 页面上选定文本的精确边界。

```javascript editor-pdf
// Useful for finding the coordinates of highlighted text in a PDF.

// Fetch the selection areas to mark them with visual highlights in a PDF.

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
let textQuads = results[0];
let firstQuad = textQuads[0];
let lastQuad = textQuads[textQuads.length - 1];
page.SetSelection({start: {x: firstQuad[0], y: firstQuad[1]}, end: {x: lastQuad[2], y: lastQuad[3]}});
let quads = page.GetSelectionQuads();
if (quads.length > 0) {
	let annot = Api.CreateHighlightAnnot(quads);
	page.AddObject(annot);
}
console.log('We highlight the selected text on the page');
```
