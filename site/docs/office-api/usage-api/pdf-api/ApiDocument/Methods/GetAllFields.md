# GetAllFields

Gets list of all fields in document.

## Syntax

```javascript
expression.GetAllFields();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiField](../../Enumeration/ApiField.md)

## Example

This example gets all fields in the document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
let comboboxField = Api.CreateComboboxField([10, 40, 160, 60]);
let listboxField = Api.CreateListboxField([10, 70, 100, 130]);

page.AddObject(textField);
page.AddObject(comboboxField);
page.AddObject(listboxField);

let allFields = doc.GetAllFields();
allFields.forEach(function(field) {
    console.log(field.GetClassType());
});
```
