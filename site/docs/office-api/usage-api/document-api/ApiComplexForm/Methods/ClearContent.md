# ClearContent

Clears all content from the current complex form, resetting it to its placeholder state.

## Syntax

```javascript
expression.ClearContent();
```

`expression` - A variable that represents a [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Erase the content of a complex form in a document.

```javascript editor-docx
// How do I clear the content inside a complex form in a document?

// Wipe user-entered values from a complex form without removing the form structure itself.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.Add(Api.CreateCheckBoxForm());
complexForm.Add("Text");
complexForm.ClearContent();
doc.Push(paragraph);
```
