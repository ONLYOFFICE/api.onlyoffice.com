# AddElement

使用其在富文本内容中的位置添加富文本段落。

## 语法

```javascript
expression.AddElement(pos, richPara);
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 必需 | number |  | 富文本段落将添加到的位置。 |
| richPara | 必需 | [ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md) |  | 将在当前位置添加的富文本段落。 |

## 返回值

boolean

## 示例

This example adds a new element to rich content.

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
richContent.AddElement(0, para);

console.log(`We added new paragraph to content`);
```
