# GetSelectedText

获取文档中的所选文本

## 语法

```javascript
expression.GetSelectedText();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 文档中选择文本并将其返回。

```javascript editor-pdf
// Set a selection over the found text, then read the plain text it contains.

// Search for a phrase, select the matching range, and log the selected text.

let doc = Api.GetDocument();
doc.AddPage(0);
let pageIndex = doc.GetPagesCount() - 1;
let page = doc.GetPage(pageIndex);
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
doc.SetSelection({
	start: { page: pageIndex, point: { x: firstQuad[0], y: firstQuad[1] } },
	end:   { page: pageIndex, point: { x: lastQuad[2], y: lastQuad[3] } }
});
console.log(`The selected text is: ${doc.GetSelectedText()}`);
```
