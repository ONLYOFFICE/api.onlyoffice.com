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

Convert emus to millimeters in a spreadsheet.

```javascript editor-xlsx
// How do I convert emus to millimeters in a spreadsheet?

// Convert emus to millimeters and display the result in a spreadsheet.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
const text = emus + ' emus are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
