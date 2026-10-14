# GetBold

从当前文本属性获取粗体属性。

继承自 [ApiRichTextPr.GetBold](../../ApiRichTextPr/Methods/GetBold.md)。

## 语法

```javascript
expression.GetBold();
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null \| undefined

## 示例

在 PDF 中检查自由文本注释中的文本是否为粗体。

```javascript editor-pdf
// How do I find out whether text is bold in a PDF?

// Retrieve the bold state of formatted text in a PDF.

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

console.log(`The bold property is: ${textPr.GetBold()}`);
```
