# SelectListValue

Selects the specified value from the combo box list values.

## Syntax

```javascript
expression.SelectListValue(sValue);
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | Required | string |  | The combo box list value that will be selected. |

## Returns

boolean

## Example

Choose a specific value from a combo box drop-down list in a document.

```javascript editor-docx
// How do I programmatically pick an option from a combo box list in a document?

// Pre-fill a combo box with a known answer to set the default selection in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SelectListValue("USA");
```
