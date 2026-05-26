# CreateRichParagraph

创建新的富文本段落。

## 语法

```javascript
expression.CreateRichParagraph();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## 示例

向 PDF 注释添加格式化文本段落。

```javascript editor-pdf
// How do I insert multiple paragraphs with different formatting in a PDF?

// Create a new paragraph and add it to a rich text annotation in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = Api.CreateRichParagraph();
para.AddText("Example text");
richContent.Push(para);
```
