# SetBorderColor

Sets the border color to the current form.

Inherited from [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md).

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Apply a border color to checkbox forms in a document.

```javascript editor-docx
// How do I change the border color of a checkbox form in a document?

// Visually distinguish checkboxes by combining a colored border with a contrasting background fill in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));
checkBoxForm.SetBackgroundColor(Api.HexColor('#FFFF00'));
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
