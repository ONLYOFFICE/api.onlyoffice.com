# Delete

Removes a form and its content.

If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Delete a date form field from a document.

```javascript editor-forms
// How do I remove a date form from a document?

// Keep only a copied version of a date field by deleting the original form in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original date form: ');

const dateForm = Api.CreateDateForm({
	'key': 'Birth date',
	'tip': 'Enter your birth date',
	'placeholder': 'Date',
	'format': 'dd.MM.yyyy',
	'lang': 'en-US'
});
paragraph.AddElement(dateForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const dateFormCopy = dateForm.Copy();
paragraph.AddElement(dateFormCopy);

dateForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original date form has been deleted, but the copy remains');
doc.Push(paragraph);
```
