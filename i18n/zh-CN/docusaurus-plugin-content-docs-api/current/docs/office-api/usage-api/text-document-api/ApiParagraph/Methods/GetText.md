# GetText

返回段落文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.Numbering | 可选 | boolean | false | 定义结果字符串是否包含编号。 |
| options.Math | 可选 | boolean | false | 定义结果字符串是否包含数学表达式。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何字符串。默认分隔符为 "\r"。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符（不适用于编号）。可以使用任何字符串。默认符号为 "\t"。 |

## 返回值

string

## 示例

此示例展示如何获取段落文本。

```javascript editor-docx
// How to get text of the paragraph object.

// Get the paragraph text and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("\tThis is just a sample text.");
let text = paragraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the first paragraph: " + text);
doc.Push(paragraph);
```
