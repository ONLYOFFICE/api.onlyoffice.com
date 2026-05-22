# MillimetersToPoints

Converts millimeters to points.

## Syntax

```javascript
expression.MillimetersToPoints(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | number |  | The number of millimeters to convert to points. |

## Returns

number

## Example

Convert a millimeter measurement to typographic points and display the result in a document.

```javascript editor-docx
// How do I translate a length from millimeters into points in a document?

// Display the point equivalent of a millimeter value as a paragraph of text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + points + ' points.');
doc.Push(paragraph);
```
