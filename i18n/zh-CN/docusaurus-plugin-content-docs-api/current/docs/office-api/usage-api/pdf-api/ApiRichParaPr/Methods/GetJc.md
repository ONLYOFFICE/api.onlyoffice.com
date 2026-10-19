# GetJc

返回富文本段落内容的对齐方式。

## 语法

```javascript
expression.GetJc();
```

`expression` - 表示 [ApiRichParaPr](../ApiRichParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[HorTextAlign](../../Enumeration/HorTextAlign.md)

## 示例

读取 PDF 中段落的文本对齐方式。

```javascript editor-pdf
// How do I check the alignment of a paragraph in a PDF?

// Find out what alignment setting is applied to a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
para.AddText("Example text");
let paraPr = para.GetParaPr();

console.log(`Paragraph justification is "${paraPr.GetJc()}"`);
```
