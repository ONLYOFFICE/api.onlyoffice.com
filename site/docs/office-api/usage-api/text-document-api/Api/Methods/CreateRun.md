# CreateRun

Creates a new smaller text block to be inserted to the current paragraph or table.

## Syntax

```javascript
expression.CreateRun();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example creates a run and inserts it into the document.

```javascript editor-docx
// Creates a run, adds a text to it, and inserts it into the first paragraph of the document.

// How to create the ApiRun object and adds it to the ApiParagraph class.

// How to add a text to the paragraph.

// How to add a text to the ApiRun object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);
```
