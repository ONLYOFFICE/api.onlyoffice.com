# ROMAN

Converts an arabic numeral to a roman numeral in the string format.

## Syntax

```javascript
expression.ROMAN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A numeric value greater than or equal to 1 and less than 3999. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A roman numeral type: **0** - classic, **1** - more concise, **2** - more concise, **3** - more concise, **4** - simplified. |

## Returns

string

## Example

Convert an arabic numeral to a roman numeral in the string format in a spreadsheet.

```javascript editor-xlsx
// How to get roman numbers from arabic in a spreadsheet.

// Use a function to convert numbers from arabic numeral to roman in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROMAN(1250, 4));
```
