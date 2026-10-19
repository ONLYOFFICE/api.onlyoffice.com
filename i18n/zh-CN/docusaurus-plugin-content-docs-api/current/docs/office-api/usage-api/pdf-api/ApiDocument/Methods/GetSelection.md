# GetSelection

获取文档选区信息

## 语法

```javascript
expression.GetSelection();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[DocSelection](../../Enumeration/DocSelection.md) \| null \| undefined

## 示例

获取 PDF 文档中的当前选区。

```javascript editor-pdf
// Read back the selection range set on the document as start and end page points.

// Search for text, select it, then log the selection's start and end coordinates.

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
let selection = doc.GetSelection();
console.log('Selection start - page: ' + selection.start.page + ', x: ' + selection.start.point.x + ', y: ' + selection.start.point.y);
console.log('Selection end - page: ' + selection.end.page + ', x: ' + selection.end.point.x + ', y: ' + selection.end.point.y);
```
