# EVEN

Rounds a positive number up and negative number down to the nearest even integer.

## Syntax

```javascript
expression.EVEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |

## Returns

number

## Example

Round a positive number up and negative number down to the nearest even integer in a spreadsheet.

```javascript editor-xlsx
// Round numbers to the nearest even integer.

// Apply EVEN function to round positive and negative numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EVEN(15.67));
```
