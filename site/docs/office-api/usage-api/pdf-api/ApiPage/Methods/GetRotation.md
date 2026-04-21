# GetRotation

Gets page rotation angle

## Syntax

```javascript
expression.GetRotation();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get page rotate of the first page in document and display it in the text field.

```javascript editor-pdf
// How to get the rotation for a page?

// Get the rotation and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page rotate is: ' + page.GetRotation());
```
