# GetClassType

Returns a type of the ApiPage class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"page"

## Example

Find out the class type of a page object.

```javascript editor-pdf
// How can I get the class type of a page?

// Get the class type of a page and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());
```
