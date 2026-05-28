# GetCurrentRun

返回光标所在的当前文本域。

## 语法

```javascript
expression.GetCurrentRun();
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichRun](../../ApiRichRun/ApiRichRun.md)

## 示例

访问您在 PDF 中当前正在编辑的文本段。

```javascript editor-pdf
// How do I get the text run I am working on in rich content in a PDF?

// Retrieve the text segment being modified in formatted content in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let run = richContent.GetCurrentRun();
run.AddText("Example text");

console.log(`We added some text to current run`);
```
