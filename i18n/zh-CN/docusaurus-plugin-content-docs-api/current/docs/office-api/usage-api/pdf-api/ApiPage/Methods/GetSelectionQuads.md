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
// How do I find the coordinates of highlighted text in a PDF?

// Fetch the selection areas to mark them with visual highlights in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
let quads = page.GetSelectionQuads();
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We highlight the selected text on the page');
```
