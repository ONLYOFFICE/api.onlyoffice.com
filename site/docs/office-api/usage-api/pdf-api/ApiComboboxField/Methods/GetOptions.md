# GetOptions

Gets all options from list options.

## Syntax

```javascript
expression.GetOptions();
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ListOption](../../Enumeration/ListOption.md)[]

## Example

This example gets options from field with list of options.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
let options = comboboxField.GetOptions();
console.log('Combobox options is: ' + options);
```
