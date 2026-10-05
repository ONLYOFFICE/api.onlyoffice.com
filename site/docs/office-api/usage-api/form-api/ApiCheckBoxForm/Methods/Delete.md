# Delete

Removes a form and its content.

If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Remove a checkbox form field from a document.

```javascript editor-forms
// How do I permanently delete a checkbox from the document in a document?

// Clean up a form by removing an unwanted radio button after it is no longer needed in a document.

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
