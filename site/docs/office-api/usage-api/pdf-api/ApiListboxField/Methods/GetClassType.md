# GetClassType

Returns a type of the ApiListboxField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiListboxField](../ApiListboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"listboxField"

## Example

This example gets field type and display it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Field type is: ' + listboxField.GetClassType());
listboxField.SetValueIndexes([0]);
```
