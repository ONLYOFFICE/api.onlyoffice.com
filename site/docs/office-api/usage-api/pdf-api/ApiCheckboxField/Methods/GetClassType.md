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

Identify the type of a checkbox field in a PDF.

```javascript editor-pdf
// How do I find out what kind of object a checkbox field is in a PDF?

// Display the classification name of a checkbox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

console.log('Field type is: ' + checkboxField.GetClassType());
```
