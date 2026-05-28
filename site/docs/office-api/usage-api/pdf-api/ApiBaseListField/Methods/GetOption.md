# GetOption

Gets option from list options.

## Syntax

```javascript
expression.GetOption(index);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | The option index. |

## Returns

[ListOption](../../Enumeration/ListOption.md)

## Example

Retrieve a specific choice from a dropdown field in a PDF.

```javascript editor-pdf
// How do I access an individual option from a dropdown in a PDF?

// Display a selected choice from a list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
let option = comboboxField.GetOption(0);
comboboxField.SetValue('First options is: ' + option);
```
