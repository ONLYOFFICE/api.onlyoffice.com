# GetVertAlign

从当前文本属性获取垂直对齐类型。

## 语法

```javascript
expression.GetVertAlign();
```

`expression` - 表示 [ApiRichTextPr](../ApiRichTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TextVertAlign](../../Enumeration/TextVertAlign.md)

## 示例

在 PDF 中检查文本的垂直对齐方式。

```javascript editor-pdf
// How do I find out if text is positioned higher or lower than normal in a PDF?

// Retrieve the vertical alignment setting of formatted text in a PDF.

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

console.log(`The vert align property is: ${textPr.GetVertAlign()}`);
```
