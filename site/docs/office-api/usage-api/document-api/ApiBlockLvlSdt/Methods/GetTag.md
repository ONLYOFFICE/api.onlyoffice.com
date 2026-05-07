# GetTag

Returns the tag attribute for the current container.

## Syntax

```javascript
expression.GetTag();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get a tag attribute for the container in a document.

```javascript editor-docx
// Create a block content control, set a tag to it, and return this tag to insert it into the second paragraph of the document.

// How to get a tag from the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
blockLvlSdt.SetTag("This is a tag.");
doc.AddElement(0, blockLvlSdt);
let tag = blockLvlSdt.GetTag();
let paragraph = doc.GetElement(1);
paragraph.AddText("Tag: " + tag);
```
