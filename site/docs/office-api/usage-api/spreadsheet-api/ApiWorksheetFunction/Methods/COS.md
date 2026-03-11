# COS

Returns the cosine of an angle.

## Syntax

```javascript
expression.COS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the cosine will be returned. |

## Returns

number

## Example

This example shows how to get the cosine of an angle.

```javascript editor-xlsx
// How to find a cosine.

// Use function to get the cosine of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COS(1.5));
```
