# RemoveElement

使用指定的位置移除元素。

## 语法

```javascript
expression.RemoveElement(pos);
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 必需 | number |  | 富文本内容中的元素编号（位置）。 |

## 返回值

boolean

## 示例

在 PDF 中从富文本内容删除元素。

```javascript editor-pdf
// How can I remove elements from rich content in a PDF?

// Take out a specific item from the content area in a PDF.

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
richContent.RemoveElement(0);

console.log(`We removed first paragraph from content`);
```
