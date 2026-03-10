# GetContent

返回当前富文本内容对象中的富文本段落数组。

## 语法

```javascript
expression.GetContent(getCopies);
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| getCopies | 必需 | boolean |  | 指定是否返回文档元素的副本。 |

## 返回值

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)[]

## 示例

This example gets all elements from rich content.

```javascript editor-pdf
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

let allParas = richContent.GetContent();

console.log(`Rich content has ${allParas.length} paragraphs`);
```
