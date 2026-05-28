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

Check the class type of a button field in a PDF.

```javascript editor-pdf
// How do I identify what type a button field object is in a PDF?

// Retrieve the object type for a button form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

console.log('Widget type is: ' + buttonField.GetClassType());
```
