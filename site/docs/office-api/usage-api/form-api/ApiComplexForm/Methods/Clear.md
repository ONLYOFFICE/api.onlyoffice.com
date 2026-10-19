# Clear

Clears the current form.

Inherited from [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md).

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove all child elements from a complex form in a document.

```javascript editor-forms
// How do I clear all elements out of a complex form in a document?

// Reset a complex form to an empty state by stripping every field it contains.

let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let checkBox = Api.CreateCheckBoxForm()
checkBox.SetChecked(true);
complexForm.Add(checkBox);
complexForm.Clear();
doc.Push(paragraph);
```
