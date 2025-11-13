# SetLabel

Sets a label of the ApiCheckBoxForm class.

## Syntax

```javascript
expression.SetLabel(sLabel);
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLabel | Required | string |  | Form label. |

## Returns

boolean

## Example

This example sets labels to checkBoxForms and inserts it into the document.

```javascript editor-pdf
// Creates a paragraph, adds two checkboxes with setting their labels.

// How to update a label of an ApiCheckBoxForm object.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetLabel("Married");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetLabel("Single");
paragraph.AddElement(checkBoxForm);
```
