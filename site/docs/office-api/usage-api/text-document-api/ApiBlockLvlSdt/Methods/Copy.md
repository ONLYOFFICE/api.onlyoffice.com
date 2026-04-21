# Copy

Creates a copy of an block content control. Ignores comments, footnote references, complex fields.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

Create a copy of a block level content control in a document.

```javascript editor-docx
// Create a block content control in the current document, copy it, and add a copy to the same document.

// Create a block level container in the document class, add a text to it, and copy it into the same document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());
```
