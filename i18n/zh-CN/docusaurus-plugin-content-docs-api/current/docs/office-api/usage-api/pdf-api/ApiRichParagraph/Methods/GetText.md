# GetText

返回段落文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何字符串。默认分隔符为 “\r”。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符（不适用于编号）。可以使用任何字符串。默认符号为 “\t”。 |

## 返回值

string

## 示例

在 PDF 中从段落提取所有文本。

```javascript editor-pdf
// How do I read the text content from a paragraph in a PDF?

// Retrieve the complete text string from a paragraph in a PDF.

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
run.AddText("Some text");

console.log(`Rich paragraph text is: ${para.GetText()}`);
```
