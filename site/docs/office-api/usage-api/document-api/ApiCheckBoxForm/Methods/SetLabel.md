# SetLabel

Sets the label for the current check box.

## Syntax

```javascript
expression.SetLabel(label);
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | Required | string |  | The label. |

## Returns

boolean

## Example

Assign a visible label to a checkbox form in a document.

```javascript editor-docx
// How do I add descriptive text next to a checkbox in a document?

// Label each checkbox option so readers know what they are selecting in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio": true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Married");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "radio" : true, "key" : "Marital status"});
checkBoxForm.SetLabel(" Single");
paragraph.AddElement(checkBoxForm);
```
