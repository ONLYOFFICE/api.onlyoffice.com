# GetTag

Returns the tag attribute for the current form.

Inherited from [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md).

## Syntax

```javascript
expression.GetTag();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the tag attached to a combo box form in a document.

```javascript editor-docx
// How do I retrieve the tag of a combo box form in a document?

// Verify that the expected tag value is stored on the form for lookup or filtering purposes.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tag" : "Country", "key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tag = comboBoxForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
