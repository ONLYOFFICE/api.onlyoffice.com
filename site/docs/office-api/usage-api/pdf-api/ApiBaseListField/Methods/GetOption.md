# GetOption

Gets option from list options.

## Syntax

```javascript
expression.GetOption(nPos);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | option index to get |

## Returns

[ListOption](../../Enumeration/ListOption.md)

## Example

Get option from field with list of options in a PDF document.

```javascript editor-pdf
// How to get the option for a list field in a PDF document?

// Get the option and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);
```
