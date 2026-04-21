# EmusToMillimeters

Converts English measure units (EMU) to millimeters.

## Syntax

```javascript
expression.EmusToMillimeters(emu);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | Required | [EMU](../../Enumeration/EMU.md) |  | No description provided. |

## Returns

[mm](../../Enumeration/mm.md)

## Example

Convert emus to millimeters in a document.

```javascript editor-docx
// How do I convert emus to millimeters in a document?

// Convert emus to millimeters and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
```
