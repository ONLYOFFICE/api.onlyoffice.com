# AddElement

向当前段落添加元素。

## 语法

```javascript
expression.AddElement(richRun, pos);
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| richRun | 必需 | [ApiRichRun](../../ApiRichRun/ApiRichRun.md) |  | 将在当前位置添加的元素。 |
| pos | 可选 | number |  | 将添加当前元素的位置。如果未指定此值，则元素将添加到当前段落的末尾。 |

## 返回值

boolean

## 示例

此示例向富文本段落添加新元素。

```javascript editor-pdf
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
para.AddElement(newRun, 0);

console.log("We added new rich run element to rich paragraph");
```
