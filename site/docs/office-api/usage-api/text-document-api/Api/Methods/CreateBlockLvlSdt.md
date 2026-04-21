# CreateBlockLvlSdt

Creates a new block level container.

## Syntax

```javascript
expression.CreateBlockLvlSdt();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

Add a block level container to the document.

```javascript editor-docx
// How to create a block text content control, add a text to it, and add this container to the document.

// Create a block level container and add it to the document class.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
