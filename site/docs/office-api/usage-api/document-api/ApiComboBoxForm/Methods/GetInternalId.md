# GetInternalId

Returns an internal id of the current form.

Inherited from [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md).

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Obtain the unique internal identifier of a combo box form in a document.

```javascript editor-docx
// How do I get the internal identifier of a combo box form in a document?

// Use the identifier to reference or track a specific combo box form programmatically.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let internalId = comboBoxForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
