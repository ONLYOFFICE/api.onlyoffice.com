# ReplaceDocumentContent

Replaces the main document content with another document content.

## Syntax

```javascript
expression.ReplaceDocumentContent(documentContent);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| documentContent | Required | [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) |  | The document content which the main document content will be replaced with. |

## Returns

boolean

## Example

This example shows how to replace the document content with the mail merge data.

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
