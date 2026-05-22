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

Insert a block text content control with text into a document.

```javascript editor-docx
// How do I add a structured text container to a document?

// Place a labeled block of editable content at the beginning of a document.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
