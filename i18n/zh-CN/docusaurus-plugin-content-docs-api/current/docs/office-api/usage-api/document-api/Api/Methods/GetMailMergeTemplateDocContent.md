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

保存邮件合并模板以便在文档中为每个收件人重复使用。

```javascript editor-docx
// How do I keep the original mail merge template after running a merge in a document?

// Restore the template layout between each merge run to produce separate recipient results in a document.

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
