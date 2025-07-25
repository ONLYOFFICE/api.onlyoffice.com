# ISODD

Returns -**true** if a number is odd.

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

This example shows how to return true if a number is odd.

```javascript editor-xlsx
// How to check if the number is odd.

// Use a function to check whether a number is odd or not.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);

```
