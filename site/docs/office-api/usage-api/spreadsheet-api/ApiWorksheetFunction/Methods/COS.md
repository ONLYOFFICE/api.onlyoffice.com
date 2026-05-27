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

Calculate the cosine value of an angle in a spreadsheet.

```javascript editor-xlsx
// What is the cosine of a given angle in a spreadsheet?

// Find the ratio of a triangle's side using an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COS(1.5));
```
