# SetEditable

Sets field editable prop.

## Syntax

```javascript
expression.SetEditable(bEditable);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bEditable | Required | boolean |  | allow user enter custom text |

## Returns

boolean

## Example

Set editable property for combobox field in a PDF document.

```javascript editor-pdf
// How can I set editable using a combobox field in a PDF document?

// Set editable for a combobox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
