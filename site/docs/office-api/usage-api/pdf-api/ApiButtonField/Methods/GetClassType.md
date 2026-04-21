# GetClassType

Returns a type of the ApiButtonField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiButtonField](../ApiButtonField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"buttonField"

## Example

Retrieve the class type of a button field in a PDF document.

```javascript editor-pdf
// How to identify the class type of a button field in a PDF document?

// Obtain the class type identifier of a button field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

console.log('Widget type is: ' + buttonField.GetClassType());
```
