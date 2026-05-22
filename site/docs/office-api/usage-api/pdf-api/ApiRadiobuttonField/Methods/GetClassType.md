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

Identify what type of object a radio button field is in a PDF.

```javascript editor-pdf
// How do I determine the object type of a radio button field in a PDF?

// Find the classification name for a radio button field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

console.log('Field type is: ' + radiobuttonField.GetClassType());
```
