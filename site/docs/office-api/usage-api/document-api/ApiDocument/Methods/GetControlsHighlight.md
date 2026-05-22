# GetControlsHighlight

Returns the highlight color of the content controls in the current document.

## Syntax

```javascript
expression.GetControlsHighlight();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Read the highlight color applied to all content controls in a document.

```javascript editor-docx
// How do I get the current highlight color set on content controls in a document?

// Verify that a highlight was applied correctly by reading it back after setting it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(255, 239, 191);
let highlight = doc.GetControlsHighlight();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The controls highlight color is: " + highlight.GetHex());
doc.Push(paragraph);
```
