# GetQuads

从当前标记批注获取四边形。

## 语法

```javascript
expression.GetQuads();
```

`expression` - 表示 [ApiBaseMarkupAnnotation](../ApiBaseMarkupAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Quad](../../Enumeration/Quad.md)[]

## 示例

This example gets quads of markup annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`The markup quads is: ${markupAnnot.GetQuads()}`);
```
