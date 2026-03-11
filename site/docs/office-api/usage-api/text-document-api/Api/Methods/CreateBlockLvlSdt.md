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

This example shows how to add a block level container to the document.

```javascript editor-docx
// How to create a block text content control, add a text to it, and add this container to the document.

// Creates a block level container and adds it to the ApiDocument class.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
