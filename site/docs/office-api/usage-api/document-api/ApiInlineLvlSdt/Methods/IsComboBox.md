# IsComboBox

Checks whether the content control is a combo box list.

## Syntax

```javascript
expression.IsComboBox();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether an inline content control is a combo box in a document.

```javascript editor-docx
// How do I verify that a content control is a combo box in a document?

// Distinguish a combo box from other list-type controls before processing its selected value in a document.

let doc = Api.GetDocument();
let comboboxControl = doc.AddComboBoxContentControl();
let isComboBox = comboboxControl.IsComboBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a combobox list? " + isComboBox);
doc.Push(paragraph);
```
