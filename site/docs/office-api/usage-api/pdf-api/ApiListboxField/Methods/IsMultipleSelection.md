# IsMultipleSelection

Checks if field is multiselect.

## Syntax

```javascript
expression.IsMultipleSelection();
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example gets multiple selection property from listbox field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
listboxField.AddOption('Option 4');
listboxField.SetMultipleSelection(true);
listboxField.SetValueIndexes([0, 3]);
console.log('Multiple selection is: ' + listboxField.IsMultipleSelection());
```
