# IsCheckBox

Checks if the content control is a checkbox.

## Syntax

```javascript
expression.IsCheckBox();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether an inline content control is a checkbox in a document.

```javascript editor-docx
// How do I check whether a content control acts as a checkbox in a document?

// Distinguish a checkbox control from other control types before applying checkbox-specific logic in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
let isCheckBox = inlineControl.IsCheckBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is the content control a checkbox? " + isCheckBox);
doc.Push(paragraph);
```
