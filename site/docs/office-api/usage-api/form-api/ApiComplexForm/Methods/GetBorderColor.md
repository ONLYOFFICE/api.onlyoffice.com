# GetBorderColor

Returns the border color of the current form.

Inherited from [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md).

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## Example

Read the border color of a complex form in a document.

```javascript editor-forms
// How do I retrieve the border color of a complex form in a document?

// Inspect the RGB values of a form's border to verify or display its current styling.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = complexForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
