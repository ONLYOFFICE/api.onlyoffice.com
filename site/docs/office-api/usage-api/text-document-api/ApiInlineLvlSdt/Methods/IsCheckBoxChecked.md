# IsCheckBoxChecked

Determines whether a checkbox content control is currently checked or unchecked.

Throws: Error if the content control is not a checkbox.

## Syntax

```javascript
expression.IsCheckBoxChecked();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check state of a checkbox content control in a document.

```javascript editor-docx
// How can I is check box checked using an inline content control in a document?

// Is check box checked for an inline content control in a document.

let doc = Api.GetDocument();
let checkBox = doc.AddCheckBoxContentControl();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let isChecked = checkBox.IsCheckBoxChecked();
paragraph.AddText("Checked: " + (isChecked ? "true" : "false"));
```
