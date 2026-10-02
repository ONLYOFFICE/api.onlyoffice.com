# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.

The null value will be returned for the inline forms.

Inherited from [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md).

## Syntax

```javascript
expression.GetWrapperShape();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## Example

Access the container shape of a fixed-size combo box form to control its position in a document.

```javascript editor-forms
// How do I get the shape that wraps a combo box form field in a document?

// Apply a colored outline to the frame surrounding a combo box to make it stand out in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let shape = comboBoxForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
