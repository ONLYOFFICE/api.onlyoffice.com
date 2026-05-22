# Select

Selects the current content control.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select a content control in a document.

```javascript editor-docx
// How do I select a content control in a document?

// Highlight an entire content control to make it active and ready for editing in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Select();
```
