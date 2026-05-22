# RecognizeContent

Recognizes content on the page and returns an array of recognized objects.

## Syntax

```javascript
expression.RecognizeContent();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

Detect and identify shapes and elements on a page in a PDF.

```javascript editor-pdf
// How do I find what objects are drawn on a page in a PDF?

// Extract recognized elements from a page to work with them in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let drawings = page.RecognizeContent();
drawings[0].Select();
```
