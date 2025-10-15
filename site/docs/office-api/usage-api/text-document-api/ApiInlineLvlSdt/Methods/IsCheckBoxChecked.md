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

This example shows how to check state of a checkbox content control.

```javascript editor-docx
let doc = Api.GetDocument();
let checkBox = doc.AddCheckBoxContentControl();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let isChecked = checkBox.IsCheckBoxChecked();
paragraph.AddText("Checked: " + (isChecked ? "true" : "false"));
```
