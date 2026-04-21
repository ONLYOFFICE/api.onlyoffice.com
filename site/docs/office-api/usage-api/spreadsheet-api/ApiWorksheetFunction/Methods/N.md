# N

Converts a value to a number, dates to serial numbers, -**true** to 1, error to [ErrorValue](../../Enumeration/ErrorValue.md), anything else to 0 (zero).

## Syntax

```javascript
expression.N(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | The value to be converted. The value can be a logical value, text, or number. |

## Returns

number

## Example

Convert a value to a number, dates to serial numbers, true to 1, error to &#123;@link global#ErrorValue ErrorValue&#125;, anything else to 0 (zero) in a spreadsheet.

```javascript editor-xlsx
// How to convert an object to a number in a spreadsheet.

// Use a function to get a number from any data type in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.N(false));
```
