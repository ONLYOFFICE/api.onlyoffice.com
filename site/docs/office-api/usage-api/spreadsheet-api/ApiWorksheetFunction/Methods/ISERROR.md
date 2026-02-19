# ISERROR

Checks whether a value is an error, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISERROR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

This example shows how to check whether a value is an error, and returns true or false.

```javascript editor-xlsx
// How to check if the cell contains an error.

// Use a function to check whether the value is error or not.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)

```
