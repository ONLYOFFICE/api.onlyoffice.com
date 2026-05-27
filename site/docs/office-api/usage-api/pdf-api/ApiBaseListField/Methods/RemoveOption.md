# RemoveOption

Removes option from list options.

## Syntax

```javascript
expression.RemoveOption(index);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | The option index. |

## Returns

boolean

## Example

Delete a choice from a dropdown field in a PDF.

```javascript editor-pdf
// How do I remove an option from a list field in a PDF?

// Take out an item from a dropdown's available choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
comboboxField.RemoveOption(2);
```
