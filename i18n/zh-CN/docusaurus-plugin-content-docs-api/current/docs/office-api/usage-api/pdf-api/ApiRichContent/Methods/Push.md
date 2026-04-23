# Push

将富文本段落推送到富文本内容。

## 语法

```javascript
expression.Push(richPara);
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| richPara | 必需 | [ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md) |  | 将推送到富文本内容的富文本段落。 |

## 返回值

boolean

## 示例

此示例向富文本内容推入新元素。

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

console.log(`We pushed new paragraph to content`);
```
