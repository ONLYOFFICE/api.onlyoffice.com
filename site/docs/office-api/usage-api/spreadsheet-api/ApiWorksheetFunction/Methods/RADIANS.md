# RADIANS

Converts degrees to radians.

## Syntax

```javascript
expression.RADIANS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An angle in degrees to convert. |

## Returns

number

## Example

This example shows how to convert degrees to radians.

```javascript editor-xlsx playground
// How to get radians from degree.

// Use a function to convert degrees to radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RADIANS(90));
```
