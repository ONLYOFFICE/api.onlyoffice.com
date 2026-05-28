# LoadMailMergeData

Loads data for the mail merge.

## Syntax

```javascript
expression.LoadMailMergeData(data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | String[][] |  | Mail merge data. The first element of the array is the array with names of the merge fields. The rest of the array elements are arrays with values for the merge fields. |

## Returns

boolean

## Example

Load recipient data and run a mail merge in a document.

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
