# IsDropDownList

Checks whether the content control is a drop-down list.

## Syntax

```javascript
expression.IsDropDownList();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether an inline content control is a dropdown list in a document.

```javascript editor-docx
// How do I check whether a content control is a dropdown list in a document?

// Distinguish a dropdown list from combo boxes or text controls before reading its selected option in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddDropDownListContentControl();
let isDropDown = inlineControl.IsDropDownList();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a dropdown list? " + isDropDown);
doc.Push(paragraph);
```
