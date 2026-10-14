# GetPosInParent

Returns the position (index) of the current form within its parent element.

Inherited from [ApiFormBase.GetPosInParent](../../ApiFormBase/Methods/GetPosInParent.md).

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Determine the index of a form within its parent element.

```javascript editor-forms
// The position is the form's index within its parent paragraph.

// Read a form's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Field: ");
let form = Api.CreateTextForm({ "key": "Name", "placeholder": "Enter text" });
paragraph.Push(form);
let position = form.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The form is at position " + position + ".");
doc.Push(report);
```
