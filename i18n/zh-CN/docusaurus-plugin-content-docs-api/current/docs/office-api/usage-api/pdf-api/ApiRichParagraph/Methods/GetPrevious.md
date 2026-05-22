# GetPrevious

返回上一个段落。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## 示例

访问 PDF 中的前一个段落并修改。

```javascript editor-pdf
// How do I get the previous paragraph in a PDF?

// Navigate backward to the previous paragraph in a PDF.

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
richContent.AddElement(1, para);
let previousPara = para.GetPrevious();
previousPara.AddText("This is previous paragraph");

console.log(`We got previous paragraph and added some text to it`);
```
