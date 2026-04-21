# GetLabel

Returns the label attribute for the current container.

## Syntax

```javascript
expression.GetLabel();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get a label attribute for the container in a document.

```javascript editor-docx
// Create a block content control, set a label to it, and return this label to insert it into the second paragraph of the document.

// How to get a label from the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Label: " + blockLvlSdt.GetLabel());
```
