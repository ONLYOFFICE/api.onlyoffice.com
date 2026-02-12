# Add

Appends the text content of the given form to the end of the current complex form.

## Syntax

```javascript
expression.Add(value);
```

`expression` - A variable that represents a [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string \| [ApiDateForm](../../ApiDateForm/ApiDateForm.md) \| [ApiPictureForm](../../ApiPictureForm/ApiPictureForm.md) \| [ApiCheckBoxForm](../../ApiCheckBoxForm/ApiCheckBoxForm.md) \| [ApiComboBoxForm](../../ApiComboBoxForm/ApiComboBoxForm.md) \| [ApiTextForm](../../ApiTextForm/ApiTextForm.md) |  | The text or the form to add. |

## Returns

boolean

## Example

This example creates complex form with multiple elements, including a text input form and static text.

```javascript editor-docx playground
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Start to fill complex form"});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
