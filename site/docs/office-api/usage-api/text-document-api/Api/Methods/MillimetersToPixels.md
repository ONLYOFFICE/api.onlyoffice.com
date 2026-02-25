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

This example shows how to convert millimeters to pixels.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);

```
