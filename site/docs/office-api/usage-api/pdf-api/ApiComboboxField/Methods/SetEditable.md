# SetEditable

Sets whether custom text can be entered.

## Syntax

```javascript
expression.SetEditable(allowCustomText);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowCustomText | Required | boolean |  | Specifies whether custom text can be entered. |

## Returns

boolean

## Example

Enable or disable user input for a field in a PDF.

```javascript editor-pdf
// Can I control whether users can type in a field in a PDF?

// Make a field accept or reject text entries in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
