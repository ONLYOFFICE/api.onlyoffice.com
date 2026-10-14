# GetPosInParent

返回段落在其父元素中的位置。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

在 PDF 中查找段落在其容器中的位置。

```javascript editor-pdf
// How do I locate where a paragraph sits in a PDF?

// Determine the placement order of a paragraph in a PDF.

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
run.AddText("Some text");

console.log(`Rich paragraph index is: ${para.GetPosInParent()}`);
```
