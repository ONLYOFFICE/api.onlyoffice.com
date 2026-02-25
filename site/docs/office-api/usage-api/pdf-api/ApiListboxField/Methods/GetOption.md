# GetOption

Gets option from list options.

## Syntax

```javascript
expression.GetOption(nPos);
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | option index to get |

## Returns

[ListOption](../../Enumeration/ListOption.md)

## Example

This example gets option from field with list of options.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);
```
