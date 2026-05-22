# SetListValues

Sets the list values to the current combo box.

## Syntax

```javascript
expression.SetListValues(aListString);
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aListString | Required | string[] |  | The combo box list values. |

## Returns

boolean

## Example

Populate a combo box form with a list of selectable options in a document.

```javascript editor-forms
// How do I define the drop-down choices available in a combo box form in a document?

// Supply a set of predefined values to a combo box so users can pick from a list in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
```
