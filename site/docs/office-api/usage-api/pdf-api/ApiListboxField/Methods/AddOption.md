# AddOption

Adds new option to list options.

## Syntax

```javascript
expression.AddOption(option, nPos);
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| option | Required | [ListOption](../../Enumeration/ListOption.md) |  | list option to add |
| nPos | Optional | number | this.GetOptions().lenght | pos to add option |

## Returns

boolean

## Example

This example adds new options to field with list of options.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
