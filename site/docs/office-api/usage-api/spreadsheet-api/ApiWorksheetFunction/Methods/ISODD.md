# ISODD

Returns - **true** if a number is odd.

## Syntax

```javascript
expression.ISODD(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to test. |

## Returns

boolean

## Example

Check if a number is odd in a spreadsheet.

```javascript editor-xlsx
// How do I determine whether a number is odd or even in a spreadsheet?

// Use a function to filter odd numbers from a set of values in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);
```
