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

Select the content control in a document.

```javascript editor-docx
// Create a block content control and select it in a document.

// How to select the block-level content control object in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The block text content control is selected.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Select();
```
