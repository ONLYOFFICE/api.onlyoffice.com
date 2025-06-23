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

This example clear content of complex form.

```javascript editor-docx
let doc = Api.GetDocument()
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.Add(Api.CreateCheckBoxForm());
complexForm.Add("Text");
complexForm.ClearContent();
doc.Push(paragraph);
```
