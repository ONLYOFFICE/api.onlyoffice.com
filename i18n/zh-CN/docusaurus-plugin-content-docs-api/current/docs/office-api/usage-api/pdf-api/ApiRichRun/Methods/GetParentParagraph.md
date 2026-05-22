# GetParentParagraph

返回当前文本块的父段落。

## 语法

```javascript
expression.GetParentParagraph();
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## 示例

访问 PDF 中包含文本运行的段落。

```javascript editor-pdf
// How do I reach the parent paragraph from a text run in a PDF?

// Locate the paragraph holding a specific text element in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");

let parentPara = run.GetParentParagraph();
parentPara.SetJc("center");

console.log(`We got parent paragraph of rich run and set justification to it`);
```
