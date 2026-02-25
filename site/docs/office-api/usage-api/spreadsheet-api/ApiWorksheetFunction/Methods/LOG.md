# LOG

Returns the logarithm of a number to the specified base.

## Syntax

```javascript
expression.LOG(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the logarithm will be returned. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The logarithm base. If omitted, it is equal to 10. |

## Returns

number

## Example

This example shows how to return the logarithm of a number to the specified base.

```javascript editor-xlsx playground
// How to get the logarithm to the specified base.

// Use a function to return the logarithm.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG(56, 5));
```
