# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.

The null value will be returned for the inline forms.

Inherited from [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md).

## Syntax

```javascript
expression.GetWrapperShape();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Retrieve the shape wrapping a fixed-size checkbox form to control its position and size in a document.

```javascript editor-docx
// How do I access the container shape of a fixed-size form in a document?

// Apply a custom outline to the shape frame surrounding each checkbox form in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(1 * 240, 1 * 240);
let shape = checkBoxForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(1 * 240, 1 * 240);
shape = checkBoxForm.GetWrapperShape();
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
