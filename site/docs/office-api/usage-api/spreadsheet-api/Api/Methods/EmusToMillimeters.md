# EmusToMillimeters

Converts English Metric Units (EMUs) to millimeters.

## Syntax

```javascript
expression.EmusToMillimeters(emu);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | Required | [EMU](../../Enumeration/EMU.md) |  | The value in English Metric Units (EMUs). |

## Returns

[mm](../../Enumeration/mm.md)

## Example

Translate an internal measurement unit into millimeters and show the result in a spreadsheet.

```javascript editor-xlsx
// How do I turn a raw measurement value into millimeters that I can read in a spreadsheet?

// Display a human-readable millimeter value from a low-level size unit in a spreadsheet.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
const text = emus + ' emus are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
