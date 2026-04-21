# ARABIC

Converts a Roman numeral to Arabic.

## Syntax

```javascript
expression.ARABIC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The Roman numeral to convert. |

## Returns

number

## Example

Convert a Roman numeral to Arabic in a spreadsheet.

```javascript editor-xlsx
// How to convert numbers to Arabic numerical in a spreadsheet.

// Use function to convert numbers to Arabic numerical in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));
```
