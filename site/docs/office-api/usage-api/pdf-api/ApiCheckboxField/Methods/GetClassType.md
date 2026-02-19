# GetClassType

Returns a type of the ApiCheckboxField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"checkboxField"

## Example

This example gets checkbox field object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

console.log('Field type is: ' + checkboxField.GetClassType());
```
