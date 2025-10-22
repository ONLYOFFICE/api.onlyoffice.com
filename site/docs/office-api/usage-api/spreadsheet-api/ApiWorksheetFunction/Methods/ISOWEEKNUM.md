# ISOWEEKNUM

Returns the ISO week number in the year for a given date.

## Syntax

```javascript
expression.ISOWEEKNUM(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The date-time code used for date and time calculation. |

## Returns

number

## Example

This example shows how to return the ISO week number in the year for a given date.

```javascript editor-xlsx
// How to get the ISO week number.

// Use a function to get an ISO week number in the year.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.ISOWEEKNUM("9/1/2017"); 

worksheet.GetRange("C1").SetValue(ans);

```
