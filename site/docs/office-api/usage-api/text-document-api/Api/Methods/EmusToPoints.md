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

This example shows how to convert EMUs (english metric units) to points.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 100;
const points = Api.EmusToPoints(emus);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');
doc.Push(paragraph);

```
