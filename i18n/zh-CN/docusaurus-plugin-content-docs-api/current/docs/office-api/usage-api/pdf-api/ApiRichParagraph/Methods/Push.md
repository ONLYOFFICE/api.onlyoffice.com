# Push

向当前段落添加元素。

## 语法

```javascript
expression.Push(richRun);
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| richRun | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 要添加到段落末尾的元素。 |

## 返回值

boolean

## 示例

在 PDF 中向段落末尾添加新元素。

```javascript editor-pdf
// How do I insert a new element into a paragraph in a PDF?

// Append an additional element to a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let newRun = Api.CreateRichRun();
newRun.AddText("New run element");
para.Push(newRun);

console.log("We pushed new rich run element to rich paragraph");
```
