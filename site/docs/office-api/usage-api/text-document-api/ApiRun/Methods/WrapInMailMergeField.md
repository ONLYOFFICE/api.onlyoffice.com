# WrapInMailMergeField

Wraps a run in a mail merge field.

## Syntax

```javascript
expression.WrapInMailMergeField();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Wrap a run in a mail merge field in a document.

```javascript editor-docx
// How to create a run wrapped in 'Mail Merge Field' in a document.

// Add a text run to the mail merge field in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Name");
paragraph.AddElement(run);
run.WrapInMailMergeField();
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Surname");
paragraph.AddElement(run);
run.WrapInMailMergeField();
```
