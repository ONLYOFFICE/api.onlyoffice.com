# GetContent

获取批注富文本内容。

## 语法

```javascript
expression.GetContent();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichContent](../../ApiRichContent/ApiRichContent.md)

## 示例

获取 PDF 文档中自由文本注释的富文本内容。

```javascript editor-pdf
// How do I get the content in a PDF document?

// Get the content using a free text annotation object in a PDF document.

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
```
