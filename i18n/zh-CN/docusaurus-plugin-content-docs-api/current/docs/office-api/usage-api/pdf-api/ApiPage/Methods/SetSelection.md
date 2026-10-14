# SetSelection

设置页面选择。

## 语法

```javascript
expression.SetSelection(selection);
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| selection | 必需 | [PageSelection](../../Enumeration/PageSelection.md) \| [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md) \| [Quad](../../Enumeration/Quad.md)[] |  | 要应用的选区。 |

## 返回值

boolean

## 示例

在 PDF 的页面上将特定文本区域标记为已选中。

```javascript editor-pdf
// Useful for highlighting a range of text on a page in a PDF.

// Define and activate a text selection within given coordinates in a PDF.

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
console.log('We selected the text on the page');
```
