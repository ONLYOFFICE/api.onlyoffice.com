# SetRegularExp

Sets regular expression for field.

## Syntax

```javascript
expression.SetRegularExp(sReg);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReg | Required | string |  | field regular expression (e.g. "\\S+@\\S+\\.\\S+") |

## Returns

boolean

## Example

Get text field and set regular expression validate for it in a PDF document.

```javascript editor-pdf
// How do I set regular exp in a PDF document?

// Set regular exp using a combobox field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue("example@gmail.com");
```
