# GetStrikeout

从当前文本属性获取删除线属性。

## 语法

```javascript
expression.GetStrikeout();
```

`expression` - 表示 [ApiRichTextPr](../ApiRichTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null \| undefined

## 示例

在 PDF 中检查文本是否有删除线。

```javascript editor-pdf
// How do I find out if text has a line through it in a PDF?

// Retrieve the strikeout state of formatted text in a PDF.

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

let textPr = run.GetTextPr();

console.log(`The strikeout property is: ${textPr.GetStrikeout()}`);
```
