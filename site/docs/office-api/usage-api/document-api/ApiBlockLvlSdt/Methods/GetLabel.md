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

Read the label assigned to a content control in a document.

```javascript editor-docx
// How do I get the label of a content control in a document?

// Set a label on a content control and then display that label as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Label: " + blockLvlSdt.GetLabel());
```
