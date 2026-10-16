# RemoveElement

移除指定位置的元素。

:::note
如果移除的是段落的最后一个元素（即段落中的所有元素都已移除），将自动创建一个新的空文本块。
:::

## 语法

```javascript
expression.RemoveElement(pos);
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 必需 | number |  | 要从段落中移除的元素位置。 |

## 返回值

boolean

## 示例

在 PDF 中从自由文本注释的段落中删除元素。

```javascript editor-pdf
// How do I remove a single element from a paragraph in a PDF?

// Eliminate an item at a certain position from a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");
para.RemoveElement(0);

console.log("We removed first element from rich paragraph");
```
