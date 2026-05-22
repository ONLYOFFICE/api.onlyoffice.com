# Copy

Creates a copy of the current run.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Duplicate a text run and place the copy into the same paragraph in a document.

```javascript editor-docx
// How do I reproduce an existing text run and insert it again in a document?

// Clone a run so the same styled text appears twice within a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);
```
