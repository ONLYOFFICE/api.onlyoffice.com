# GetClassType

Returns a type of the ApiRadiobuttonField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRadiobuttonField](../ApiRadiobuttonField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"radiobuttonField"

## Example

This example gets radiobutton field object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

console.log('Field type is: ' + radiobuttonField.GetClassType());
```
