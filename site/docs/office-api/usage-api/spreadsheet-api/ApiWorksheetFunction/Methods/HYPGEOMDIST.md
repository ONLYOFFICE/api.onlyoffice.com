# HYPGEOMDIST

Returns the hypergeometric distribution.

## Syntax

```javascript
expression.HYPGEOMDIST(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of successes in the sample. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The size of the sample. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of successes in the population. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The population size. |

## Returns

number

## Example

Calculate the hypergeometric distribution probability in a spreadsheet.

```javascript editor-xlsx
// How do I find the probability using a hypergeometric distribution in a spreadsheet?

// Return the hypergeometric distribution value for a statistical analysis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPGEOMDIST(2, 3, 3, 12));
```
