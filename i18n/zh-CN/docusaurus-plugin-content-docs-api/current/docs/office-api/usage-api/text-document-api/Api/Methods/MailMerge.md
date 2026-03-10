# MailMerge

启动邮件合并过程。

## 语法

```javascript
expression.MailMerge(startIndex, endIndex);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startIndex | 可选 | number | 0 | 邮件合并过程的文档起始索引。 |
| endIndex | 可选 | number | Api.GetMailMergeReceptionsCount() - 1 | 邮件合并过程的文档结束索引。 |

## 返回值

boolean

## 示例

此示例展示如何启动邮件合并过程。

```javascript editor-docx
// Wraps the text runs in the mail merge fields, loads the mail merge data into the document, and starts the mail merge process.

// How to use the mail merge feature starting from the first mail merge record.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fields = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < fields.length; ++i) 
{
	let run = Api.CreateRun();
	run.AddText(fields[i]);
	paragraph.AddElement(run);
	run.WrapInMailMergeField();
	paragraph.AddText(" ");
}
paragraph.AddText("!");
Api.LoadMailMergeData([fields, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
Api.MailMerge(1);
```
