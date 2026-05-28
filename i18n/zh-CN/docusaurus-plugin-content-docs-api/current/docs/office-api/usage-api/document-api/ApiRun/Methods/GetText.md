# GetText

从文本块返回文本。

## 语法

```javascript
expression.GetText(options);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | object |  | 返回文本的格式选项。 |
| options.NewLineSeparator | 可选 | string | '\r' | 定义在结果字符串中如何指定行分隔符。可以使用任何符号。默认分隔符为 “\r”。 |
| options.TabSymbol | 可选 | string | '\t' | 定义在结果字符串中如何指定制表符。可以使用任何符号。默认符号为 “\t”。 |

## 返回值

string

## 示例

从文档中的文本运行提取纯文本内容。

```javascript editor-docx
// How do I read the string of characters stored in a text run in a document?

// Retrieve the readable text from a run and display it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("\tThis is a text run");
paragraph.AddElement(run);
let text = run.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified run: " + text);
doc.Push(paragraph);
```
