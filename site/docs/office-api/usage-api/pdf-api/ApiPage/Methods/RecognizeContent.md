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
// Useful for finding what objects are drawn on a page in a PDF.

// Extract recognized elements from a page to work with them in a PDF.

const doc = Api.GetDocument();
doc.AddPage(0);
const page = doc.GetPage(0);

let drawings = page.RecognizeContent();
if (drawings.length > 0) {
	drawings[0].Select();
}
```
