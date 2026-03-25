# ReplaceDocumentContent

用另一个文档内容替换主文档内容。

## 语法

```javascript
expression.ReplaceDocumentContent(documentContent);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| documentContent | 必需 | [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) |  | 将用于替换主文档内容的文档内容。 |

## 返回值

boolean

## 示例

此示例展示如何用邮件合并数据替换文档内容。

```javascript editor-docx
// Starts the mail merge process and replaces the resulting document content with the mail merge template document.

// How to replace the main document content with another document content.

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

let template = Api.GetMailMergeTemplateDocContent();
let receptionsCount = Api.GetMailMergeReceptionsCount();
let receptions = [];
for (let i = 0; i < receptionsCount; ++i) 
{
	Api.MailMerge(i, i);
	receptions.push(doc.GetElement(0));
	Api.ReplaceDocumentContent(template);
}
paragraph = Api.CreateParagraph();
paragraph.AddLineBreak();
paragraph.AddText("Receptions");
paragraph.SetBold(true);
doc.Push(paragraph);
doc.Push(receptions[0]);
doc.Push(receptions[1]);
paragraph = Api.CreateParagraph();
paragraph.AddLineBreak();
paragraph.AddText("The mail merge process was run twice for each mail merge reception. But the results were replaced with the mail merge template document content. This template allows you to save each mail merge reception to the separate file.");
doc.Push(paragraph);
```
