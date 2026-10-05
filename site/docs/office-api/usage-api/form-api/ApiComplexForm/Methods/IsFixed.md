# IsFixed

Checks if the current form is fixed size.

Inherited from [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md).

## Syntax

```javascript
expression.IsFixed();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a complex form has a fixed size in a document.

```javascript editor-forms
// How do I determine if a form is fixed in size in a document?

// Verify the fixed-size status of a form before adjusting its layout.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let isFixed = complexForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("Complex form is fixed: " + isFixed);
doc.Push(paragraph);
```
