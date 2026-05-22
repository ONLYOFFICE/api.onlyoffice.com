# GAMMA

Returns the gamma function value.

## Syntax

```javascript
expression.GAMMA(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the gamma function will be calculated. |

## Returns

number

## Example

Return the gamma function value.

```javascript editor-xlsx
// Calculate the gamma function for the given parameter value.

// Determine gamma function result using GAMMA with numeric input.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);
```
