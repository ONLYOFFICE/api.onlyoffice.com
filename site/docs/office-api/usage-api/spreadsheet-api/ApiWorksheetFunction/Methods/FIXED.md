# FIXED

Rounds a number to the specified number of decimals and returns the result as text with or without commas.

## Syntax

```javascript
expression.FIXED(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to round and convert to text. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of digits to the right of the decimal point. If omitted, the function will assume it to be 2. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | Specifies whether do display commas in the returned text (**false** or omitted) or not (**true**). |

## Returns

string

## Example

Format a number to a fixed number of decimal places in a spreadsheet.

```javascript editor-xlsx
// How do I display a number with a specific number of decimals in a spreadsheet?

// Round and format a number as text with optional thousand separators in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIXED(1234.9, 1, false));
```
