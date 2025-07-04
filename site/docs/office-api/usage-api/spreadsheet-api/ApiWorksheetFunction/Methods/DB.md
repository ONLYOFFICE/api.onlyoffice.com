# DB

Returns the depreciation of an asset for a specified period using the fixed-declining balance method.

## Syntax

```javascript
expression.DB(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The initial cost of the asset. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The salvage value of the asset at the end of its lifetime. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The period for which the depreciation will be calculated. Period must use the same units as the useful life of the asset. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of months in the first year. If this parameter is omitted, it is assumed to be 12. |

## Returns

number

## Example

This example shows how to return the depreciation of an asset for a specified period using the fixed-declining balance method.

```javascript editor-xlsx
// How to get the depreciation of an asset for a specified period.

// Use function to return the depreciation of an asset for a specified period using the fixed-declining balance method.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DB(3500, 500, 5, 1, 10));
```
