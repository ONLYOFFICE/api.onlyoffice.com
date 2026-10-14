# GetText

返回当前文档内容对象的内部文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.ParaSeparator | 可选 | string | '\r\n' | 定义在结果字符串中如何指定段落分隔符。可以使用任何符号。默认分隔符为 “\r\n”。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符。可以使用任何符号。默认符号为 “\t”。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何符号。默认分隔符为 “\r”。 |

## 返回值

string

## 示例

在 PDF 中从富文本内容提取文本。

```javascript editor-pdf
// How can I access text stored in rich content in a PDF?

// Retrieve and display text from annotated content in a PDF.

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

console.log(`Rich content contains "${richContent.GetText()}" text`);
```
