# DDB

Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify.

## Syntax

```javascript
expression.DDB(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The initial cost of the asset. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The salvage value of the asset at the end of its lifetime. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The period for which the depreciation will be calculated. Period must use the same units as the useful life of the asset. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The rate at which the balance declines. If this parameter is omitted, it is assumed to be 2 (the double-declining balance method). |

## Returns

number

## Example

Calculate asset depreciation using the double-declining balance method in a spreadsheet.

```javascript editor-xlsx
// What is the depreciation amount for an asset in a specific period in a spreadsheet?

// Determine how much value your asset loses with accelerated depreciation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DDB(3500, 500, 5, 1, 2));
```
