# VDB

Returns the depreciation of an asset for any specified period, including partial periods, using the double-declining balance method or some other method specified.

## Syntax

```javascript
expression.VDB(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The initial cost of the asset. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The salvage value of the asset at the end of its lifetime. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The starting period for which the depreciation will be calculated, in the same units as the useful life of the asset. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The ending period for which the depreciation will be calculated, in the same units as the useful life of the asset. |
| arg6 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The rate at which the balance declines. If it is omitted, the function will assume it to be 2 |
| arg7 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | Specifies whether to use straight-line depreciation when depreciation is greater than the declining balance calculation (**false** or omitted). If it is set to **true**, the function uses the declining balance method. |

## Returns

number

## Example

This example shows how to return a depreciation of an asset for any specified period, including partial periods, using the double-declining balance method or some other method specified.

```javascript editor-xlsx
// How to estimate depreciation of an asset for any specified period.

// Use a depreciation of an asset for any specified period including partial periods.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.VDB(3500, 500, 5, 1, 3, 2, false));
```
