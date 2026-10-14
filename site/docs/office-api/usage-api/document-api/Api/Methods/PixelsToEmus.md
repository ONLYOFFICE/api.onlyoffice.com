# PixelsToEmus

Converts pixels to EMUs (English Metric Units).

## Syntax

```javascript
expression.PixelsToEmus(px);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to EMUs. |

## Returns

number

## Example

Convert a pixel value to English metric units and display the result in a document.

```javascript editor-docx
// How do I find the English metric unit equivalent of a pixel measurement in a document?

// Show the English metric unit value that matches a given number of pixels in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);
```
