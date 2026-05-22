# Delete

Removes a form and its content. If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Example

Remove a form field from a document.

```javascript editor-docx
// How do I delete a form field in a document?

// Clean up a document by removing one of several inserted checkbox forms.

const doc = Api.GetDocument();
const checkBoxForm = Api.CreateCheckBoxForm({
	'key': 'Marital status',
	'tip': 'Specify your marital status',
	'placeholder': 'Marital status',
	'radio': true
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(' Married');
let copyCheckBoxForm = checkBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyCheckBoxForm);
paragraph.AddText(' Single');
checkBoxForm.Delete();
```
