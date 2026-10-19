# GetPlaceholderText

Returns the placeholder text from the current form.

Inherited from [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md).

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the placeholder text set on a complex form in a document.

```javascript editor-forms
// How do I get the placeholder text displayed inside a form in a document?

// Verify that the correct hint text appears in a form before distributing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetPlaceholderText("Start adding forms and text");
let placeholderText = complexForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
