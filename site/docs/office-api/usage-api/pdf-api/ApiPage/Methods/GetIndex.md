# GetIndex

Gets page index

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Retrieve the sequential position of a page in a PDF.

```javascript editor-pdf
// Useful for finding which page number a page is in a PDF.

// Access the page position to identify its location in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page index is: ' + page.GetIndex());
```
