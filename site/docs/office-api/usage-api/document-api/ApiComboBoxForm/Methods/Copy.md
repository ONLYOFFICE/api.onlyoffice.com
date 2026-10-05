# Copy

Copies the current form (copies with the shape if it exists).

Inherited from [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md).

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)

## Example

Duplicate a combo box form field and insert the copy into a document.

```javascript editor-docx
// How do I create a copy of an existing combo box form field in a document?

// Reuse a configured combo box by cloning it so both fields share the same options in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let copyComboBoxForm = comboBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComboBoxForm);
```
