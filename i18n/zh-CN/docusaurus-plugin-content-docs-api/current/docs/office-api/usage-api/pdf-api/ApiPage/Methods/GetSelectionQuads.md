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

This example gets the selection quads on the page and highlights it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
let quads = page.GetSelectionQuads();
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We highlight the selected text on the page');
```
