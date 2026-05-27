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

将模板与数据记录合并以在文档中生成个性化信件。

```javascript editor-docx
// How do I fill a letter template with names and greetings from a data list in a document?

// Automate the creation of multiple personalized copies from a single template in a document.

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
