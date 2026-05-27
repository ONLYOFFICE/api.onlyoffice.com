# EmusToPoints

Converts EMUs (English Metric Units) to points.

## Syntax

```javascript
expression.EmusToPoints(emu);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | Required | number |  | The number of EMUs to convert to points. |

## Returns

number

## Example

Convert a measurement from EMUs to points in a document.

```javascript editor-docx
// How do I convert EMUs to points in a document?

// Display the equivalent point value for a given number of EMUs in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 100;
const points = Api.EmusToPoints(emus);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');
doc.Push(paragraph);
```
