# AddOption

Adds new option to list options.

## Syntax

```javascript
expression.AddOption(option, nPos);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| option | Required | [ListOption](../../Enumeration/ListOption.md) |  | list option to add |
| nPos | Optional | number | this.GetOptions().lenght | pos to add option |

## Returns

boolean

## Example

Add new options to field with list of options in a PDF document.

```javascript editor-pdf
// How do I add the option in a PDF document?

// Add the option using a list field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
