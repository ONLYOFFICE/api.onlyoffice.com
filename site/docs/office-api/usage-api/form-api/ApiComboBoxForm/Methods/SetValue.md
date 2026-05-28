# SetValue

Sets the value of the combo box form. Selects a list item if the value matches one,
otherwise sets it as free text (only for editable combo boxes).

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string |  | The value to set. |

## Returns

boolean

## Example

Set the value of a combo box form by selecting a matching list item.

```javascript editor-forms
// SetValue selects a list item when the value matches; for editable combo boxes it also accepts free text.

// Create a combo box form with a list, then set its value to one of the list items.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Department", "tip": "Select your department", "required": true, "placeholder": "Department", "editable": false, "list": ["HR", "Engineering", "Marketing"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetListValues(["HR", "Engineering", "Marketing"]);
comboBoxForm.SetValue("Engineering");
```
