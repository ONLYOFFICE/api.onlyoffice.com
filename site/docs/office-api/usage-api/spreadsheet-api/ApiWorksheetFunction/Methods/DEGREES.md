# DEGREES

Converts radians to degrees.

## Syntax

```javascript
expression.DEGREES(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians to convert. |

## Returns

number

## Example

This example shows how to convert radians to degrees.

```javascript editor-xlsx
// How to convert radians to degrees.

// Use function to get degrees from radians.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));
```
