# T_DIST_2T

Returns the two-tailed Student's t-distribution.

## Syntax

```javascript
expression.T_DIST_2T(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |

## Returns

number

## Example

Calculate the two-tail probability of the Student's t-distribution in a spreadsheet.

```javascript editor-xlsx
// How do I find the two-tailed probability for a given t-value in a spreadsheet?

// Get the probability for both tails of the t-distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_DIST_2T(1.5, 10));
```
