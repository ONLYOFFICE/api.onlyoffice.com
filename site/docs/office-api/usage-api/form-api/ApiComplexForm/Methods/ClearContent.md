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

Clear content of complex form.

```javascript editor-forms
// How can I clear content using a complex form in a document?

// Clear content for a complex form in a document.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.Add(Api.CreateCheckBoxForm());
complexForm.Add("Text");
complexForm.ClearContent();
doc.Push(paragraph);
```
