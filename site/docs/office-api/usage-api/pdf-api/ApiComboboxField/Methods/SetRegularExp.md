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

This example gets text field and sets regular expression validate for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue("example@gmail.com");

```
