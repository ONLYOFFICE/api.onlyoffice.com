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

Set the list values to the current combo box in a document.

```javascript editor-forms
// How to set items of the dropdown in a document.

// Create a combobox and add its list values in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
```
