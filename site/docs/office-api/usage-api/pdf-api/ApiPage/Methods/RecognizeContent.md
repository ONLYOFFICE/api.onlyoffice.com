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

How to recognize content on a page.

```javascript editor-pdf
// Get recognized drawing on a page and select it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let drawings = page.RecognizeContent();
drawings[0].Select();
```
