# MailMerge

Starts the mail merge process.

## Syntax

```javascript
expression.MailMerge(startIndex, endIndex);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startIndex | Optional | number | 0 | The start index of the document for mail merge process. |
| endIndex | Optional | number | Api.GetMailMergeReceptionsCount() - 1 | The end index of the document for mail merge process. |

## Returns

boolean

## Example

Merge a template with data records to generate personalized letters in a document.

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
