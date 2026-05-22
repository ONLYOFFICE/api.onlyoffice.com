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

Convert Roman numerals to regular numbers in a spreadsheet.

```javascript editor-xlsx
// Transform text Roman numerals using the ARABIC function in a spreadsheet.

// Place the converted number into a cell for calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));
```
