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

Add a formatted text segment to the first paragraph in a document.

```javascript editor-docx
// How do I create a standalone piece of text and append it to an existing paragraph in a document?

// Insert new text into a paragraph as a separate block that can carry its own formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);
```
