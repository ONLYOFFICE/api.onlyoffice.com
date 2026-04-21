# GetValueIndexes

Gets selected value indexes.

## Syntax

```javascript
expression.GetValueIndexes();
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number[]

## Example

Get selected value indexes from field with list of options in a PDF document.

```javascript editor-pdf
// How do I get the value indexes in a PDF document?

// Get the value indexes using a list field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
console.log('Selected indexes is: ' + comboboxField.GetValueIndexes());
```
