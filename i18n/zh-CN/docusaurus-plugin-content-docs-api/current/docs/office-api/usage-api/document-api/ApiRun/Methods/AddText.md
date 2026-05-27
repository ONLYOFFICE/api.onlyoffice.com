# AddText

向当前文本块添加文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要添加到当前文本块的文本。 |

## 返回值

boolean

## 示例

将文本字符串放入文本运行并将其添加到文档的段落中。

```javascript editor-docx
// How do I write a sentence into a text run and display it in a document?

// Build a paragraph by filling a text run with content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
