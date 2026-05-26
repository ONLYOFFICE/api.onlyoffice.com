# MillimetersToPixels

Converts millimeters to pixels.

## Syntax

```javascript
expression.MillimetersToPixels(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | number |  | The number of millimeters to convert to pixels. |

## Returns

number

## Example

Convert a millimeter measurement to pixels and display the result in a document.

```javascript editor-docx
// How do I find the pixel equivalent of a measurement given in millimeters in a document?

// Show how many pixels correspond to a specific number of millimeters in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);
```
