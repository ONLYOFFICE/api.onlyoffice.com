# GetSelection

获取页面选区。

## 语法

```javascript
expression.GetSelection();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PageSelection](../../Enumeration/PageSelection.md) \| null \| undefined

## 示例

获取 PDF 中页面上的当前选区。

```javascript editor-pdf
// Read back the selection range set on a single page as start and end points.

// Search for text on the page, select it, then log the selection's start and end coordinates.

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
page.SetSelection({ start: { x: firstQuad[0], y: firstQuad[1] }, end: { x: lastQuad[2], y: lastQuad[3] } });
let selection = page.GetSelection();
console.log('Selection start - x: ' + selection.start.x + ', y: ' + selection.start.y);
console.log('Selection end - x: ' + selection.end.x + ', y: ' + selection.end.y);
```
