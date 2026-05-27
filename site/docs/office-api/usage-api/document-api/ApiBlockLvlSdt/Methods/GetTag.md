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

Read the tag value attached to a content control in a document.

```javascript editor-docx
// How do I get the tag of a content control in a document?

// Assign a tag to a content control and then display that tag as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
blockLvlSdt.SetTag("This is a tag.");
doc.AddElement(0, blockLvlSdt);
let tag = blockLvlSdt.GetTag();
let paragraph = doc.GetElement(1);
paragraph.AddText("Tag: " + tag);
```
