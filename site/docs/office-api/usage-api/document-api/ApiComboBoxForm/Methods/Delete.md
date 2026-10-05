# Delete

Removes a form and its content.

If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Remove a combo box form field from a document.

```javascript editor-docx
// How do I permanently delete a combo box form field in a document?

// Keep a copy of a form field and delete the original to leave only the duplicate in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original combo box form: ');

const comboBoxForm = Api.CreateComboBoxForm({
	'key': 'Personal information',
	'tip': 'Choose your country',
	'placeholder': 'Country',
	'editable': false,
	'autoFit': false,
	'items': ['Latvia', 'USA', 'UK']
});
paragraph.AddElement(comboBoxForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const comboBoxFormCopy = comboBoxForm.Copy();
paragraph.AddElement(comboBoxFormCopy);

comboBoxForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original combo box form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
