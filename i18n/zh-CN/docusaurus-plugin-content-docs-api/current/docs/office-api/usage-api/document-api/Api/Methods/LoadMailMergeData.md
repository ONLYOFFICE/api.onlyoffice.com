# LoadMailMergeData

加载邮件合并的数据。

## 语法

```javascript
expression.LoadMailMergeData(data);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | String[][] |  | 邮件合并数据。数组的第一个元素是包含合并字段名称的数组。其余数组元素是包含合并字段值的数组。 |

## 返回值

boolean

## 示例

加载收件人数据并在文档中运行邮件合并。

```javascript editor-docx
// How do I supply data to mail merge fields and start the merge in a document?

// Fill merge fields with names and greetings, then produce the merged result in a document.

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
Api.MailMerge();
```
