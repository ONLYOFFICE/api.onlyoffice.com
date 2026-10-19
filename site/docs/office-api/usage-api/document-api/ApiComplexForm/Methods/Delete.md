# Delete

Removes a form and its content.

If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Delete a complex form from a document.

```javascript editor-docx
// How do I remove a complex form from a document?

// Eliminate an unwanted form while keeping any copies that were made beforehand.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original complex form: ');

const complexForm = Api.CreateComplexForm({
	'key': 'Complex form',
	'tip': 'Enter data',
	'placeholder': 'Complex form'
});
paragraph.AddElement(complexForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const complexFormCopy = complexForm.Copy();
paragraph.AddElement(complexFormCopy);

complexForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original complex form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
