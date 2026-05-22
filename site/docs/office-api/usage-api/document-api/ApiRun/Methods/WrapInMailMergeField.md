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

Turn a text run into a mail merge placeholder in a document.

```javascript editor-docx
// How do I mark a piece of text so it acts as a merge field in a document?

// Convert a named text run into a field that gets filled during mail merge in a document.

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
