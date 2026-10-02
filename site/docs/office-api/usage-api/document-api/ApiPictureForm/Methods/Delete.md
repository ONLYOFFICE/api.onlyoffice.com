# Delete

Removes a form and its content.

If keepContent is true, the content is not deleted.

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## Syntax

```javascript
expression.Delete(keepContent);
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | boolean |  | Specifies if the content will be deleted or not. |

## Returns

boolean

## Example

Remove a picture form field entirely from a document.

```javascript editor-docx
// How do I permanently delete a picture form field from a document?

// Discard an unwanted picture form while keeping other content intact in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original picture form: ');

const pictureForm = Api.CreatePictureForm({
	'key': 'Photo',
	'tip': 'Upload your photo',
	'placeholder': 'Photo',
});
pictureForm.SetImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	Api.MillimetersToEmus(50),
	Api.MillimetersToEmus(50)
);
paragraph.AddElement(pictureForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const pictureFormCopy = pictureForm.Copy();
paragraph.AddElement(pictureFormCopy);

pictureForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original picture form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
