# GetStartStyle

获取线条起点样式。

## 语法

```javascript
expression.GetStartStyle();
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## 示例

获取 PDF 文档中线条注释的起始线条样式。

```javascript editor-pdf
// How can I get the start style using a line annotation in a PDF document?

// Get the start style for a line annotation in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style is: ${lineAnnot.GetStartStyle()}`);
```
