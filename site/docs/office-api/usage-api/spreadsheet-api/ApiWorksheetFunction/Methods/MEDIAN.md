# MEDIAN

Returns the median, or the number in the middle of the set of given numbers.

## Syntax

```javascript
expression.MEDIAN(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the median will be calculated. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the median, or the number in the middle of the set of given numbers.

```javascript editor-xlsx
// How to get a median from the list.

// Use a function to get a value that located in the middle of the list.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let median = func.MEDIAN(4,45,12,34,3,54,2,2);
worksheet.GetRange("C1").SetValue(median);



```
