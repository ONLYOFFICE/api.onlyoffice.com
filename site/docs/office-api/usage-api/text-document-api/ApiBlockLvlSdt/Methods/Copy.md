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

This example creates a copy of a block level content control.

```javascript editor-docx playground
// Creates a block content control in the current document, copies it, and adds a copy to the same document.

// How to create a copy of the ApiBlockLvlSdt object.

// Creates a block level container in the ApiDocument class, adds a text to it, and copies it into the same document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());
```
