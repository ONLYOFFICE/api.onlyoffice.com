# MillimetersToEmus

Converts millimeters to English Metric Units (EMUs).
The result is an integer value.

## Syntax

```javascript
expression.MillimetersToEmus(mm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | Required | [mm](../../Enumeration/mm.md) |  | No description provided. |

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

Convert millimeters to emus in a spreadsheet.

```javascript editor-xlsx
// How to convert millimeters to emus in a spreadsheet?

// Convert millimeters to emus using the spreadsheet API.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
const text = millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
