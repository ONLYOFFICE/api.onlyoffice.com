# GetTextWithQuads

获取页面上每行带有四边形坐标的所有文本内容。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetTextWithQuads();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TextWithQuads](../../Enumeration/TextWithQuads.md)[]

## 示例

从 PDF 中的页面获取文本内容及其坐标。

```javascript editor-pdf
// Useful for reading PDF page text together with its location.

// Extract page text lines with quadrilateral coordinates in a PDF.

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

let textWithQuads = page.GetTextWithQuads();
textWithQuads.forEach(function(item) {
	console.log(`Text: ${item.text}, quads: ${item.quads}`);
});
```
