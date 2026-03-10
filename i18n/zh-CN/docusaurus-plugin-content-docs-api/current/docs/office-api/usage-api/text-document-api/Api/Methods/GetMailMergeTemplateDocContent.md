# GetMailMergeTemplateDocContent

返回邮件合并模板文档。

## 语法

```javascript
expression.GetMailMergeTemplateDocContent();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

此示例获取邮件合并模板并将其数据粘贴到文档中。

```javascript editor-docx
// Wraps the text runs in the mail merge fields and returns the mail merge template document.

// Returns the ApiDocumentContent object whith represents the mail merge template document.

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
