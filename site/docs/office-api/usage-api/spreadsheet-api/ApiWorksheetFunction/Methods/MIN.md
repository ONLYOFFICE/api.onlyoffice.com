# MIN

Returns the smallest number in a set of values. Ignores logical values and text.

## Syntax

```javascript
expression.MIN(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the smallest number will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the smallest number in a set of values. Ignores logical values and text.

```javascript editor-xlsx
// How to get a minimum number from a list of numbers.

// Use a function to find a minimum from a list.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let min = func.MIN(123, 197, 46, 345, 67, 456);
worksheet.GetRange("C1").SetValue(min);

```
