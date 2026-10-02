# Copy

Copies the current form (copies with the shape if it exists).

Inherited from [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md).

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)

## Example

Duplicate a complex form and insert the copy in a document.

```javascript editor-forms
// How do I copy a complex form to reuse it in a document?

// Create an identical second form from an existing one to repeat the same input structure.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add('Text');
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let copyComplexForm = complexForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyComplexForm);
```
