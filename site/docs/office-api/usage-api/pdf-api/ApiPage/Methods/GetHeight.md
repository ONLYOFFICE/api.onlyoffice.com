# GetHeight

Gets page height

## Syntax

```javascript
expression.GetHeight();
```

`expression` - A variable that represents an [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

Get the height of a page in a PDF.

```javascript editor-pdf
// How do I find out the vertical size of a page in a PDF?

// Read the page height in points to display it in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page height is: ' + page.GetHeight());
```
