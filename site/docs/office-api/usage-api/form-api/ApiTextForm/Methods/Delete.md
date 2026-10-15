# Delete

Removes a form and its content.

If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Remove a text input field entirely from a document.

```javascript editor-forms
// How do I permanently take out a text field while keeping its copy in a document?

// Erase a specific text entry field without affecting other fields in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original text form: ');

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'placeholder': 'First name',
});
paragraph.AddElement(textForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const textFormCopy = textForm.Copy();
paragraph.AddElement(textFormCopy);

textForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original text form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
