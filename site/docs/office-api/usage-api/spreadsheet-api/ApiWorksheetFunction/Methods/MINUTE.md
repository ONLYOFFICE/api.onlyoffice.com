# MINUTE

Returns the minute, a number from 0 to 59.

## Syntax

```javascript
expression.MINUTE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | A number in the date-time code, or text in the time format, such as "16:48:00" or "4:48:00 PM", or a result of other formulas or functions. |

## Returns

number

## Example

This example shows how to return the minute, a number from 0 to 59.

```javascript editor-xlsx
// How to get a minute from a time.

// Use a function to get minutes from a time object.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.MINUTE("4:25 pm"); 

worksheet.GetRange("C1").SetValue(ans);

```
