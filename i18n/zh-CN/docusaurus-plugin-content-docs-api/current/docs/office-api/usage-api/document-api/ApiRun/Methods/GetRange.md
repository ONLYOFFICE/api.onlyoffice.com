# GetRange

返回表示指定文本运行中包含的文档部分的 Range 对象。
调用此方法之前，文本运行必须已附加到文档。

## 语法

```javascript
expression.GetRange(Start, End);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | 必需 | Number |  | 当前元素中的起始位置索引。 |
| End | 必需 | Number |  | 当前元素中的结束位置索引。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

按字符位置在文档中选择文本运行的一部分。

```javascript editor-docx
// How do I pick out a specific slice of text within a run in a document?

// Target a character range inside a text run for formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let range = run.GetRange(0, 3);
range.SetBold(true);
```
