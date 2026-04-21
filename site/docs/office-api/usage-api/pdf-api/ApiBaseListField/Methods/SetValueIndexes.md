# SetValueIndexes

Sets selected value indexes.

## Syntax

```javascript
expression.SetValueIndexes(aIndexes);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aIndexes | Required | number[] |  | selected indexes |

## Returns

boolean

## Example

Set selected value index to field with list of options in a PDF document.

```javascript editor-pdf
// How do I set value indexes in a PDF document?

// Set value indexes using a list field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
