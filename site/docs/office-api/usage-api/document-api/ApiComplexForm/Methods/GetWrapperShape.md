# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.

The null value will be returned for the inline forms.

Inherited from [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md).

## Syntax

```javascript
expression.GetWrapperShape();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Obtain the wrapper shape that controls the position and size of a fixed-size form in a document.

```javascript editor-docx
// How do I reposition or resize a fixed-size form frame in a document?

// Move a form to an exact location on the page by accessing and adjusting its wrapper shape in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);
let shape = complexForm.GetWrapperShape();
shape.SetHorPosition("page", 50 * 36000);
shape.SetVerPosition("page", 50 * 36000);
```
