# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.
The null value will be returned for the inline forms.

## Syntax

```javascript
expression.GetWrapperShape();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Access the container shape that holds a fixed-size form field to control its frame in a document.

```javascript editor-docx
// How do I get the surrounding shape of a form field so I can adjust its border or position in a document?

// Apply a custom outline to the wrapper shape of a form field to make it stand out visually in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let shape = textForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
