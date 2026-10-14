# RemoveAllElements

从当前段落中移除所有元素。

:::note
当从段落中移除所有元素时，将自动创建一个新的空文本块。
:::

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除 PDF 中段落的所有内容。

```javascript editor-pdf
// How do I delete every element in a paragraph in a PDF?

// Empty the contents of a paragraph in a PDF.

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
para.RemoveAllElements();

console.log("We removed all elements from rich paragraph");
```
