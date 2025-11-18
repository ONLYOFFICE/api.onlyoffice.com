# Delete

Deletes the specified form.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the specified form.

```javascript editor-docx
// How to delete a form from the document by its key.

// Get all forms and remove the unnecessary ones.

const formKey = "Key";
const document = Api.GetDocument();
let forms = document.GetAllForms();

for (let form of forms) {
    if (form.GetFormKey() === formKey) {
        form.Delete();
    }
}
```