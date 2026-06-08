# AddOption

Adds new option to list options.

## Syntax

```javascript
expression.AddOption(option, index);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| option | Required | [ListOption](../../Enumeration/ListOption.md) |  | list option to add |
| index | Optional | number | this.GetOptions().lenght | index to add option. |

## Returns

boolean

## Example

Add choices to a dropdown or list field in a PDF.

```javascript editor-pdf
// How can I add options to a dropdown list in a PDF?

// Populate a form field with multiple selectable items in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
