# YIELDMAT

Returns the annual yield of a security that pays interest at maturity.

## Syntax

```javascript
expression.YIELDMAT(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The settlement date of the Treasury bill, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the Treasury bill, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The issue date of the security, expressed as a serial date number. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate of the security at the issue date. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The purchase price of the security, per $100 par value. |
| arg6 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The day count basis to use: **0** or omitted - US (NASD) 30/360; **1** - Actual/actual; **2** - Actual/360; **3** - Actual/365; **4** - European 30/360. |

## Returns

number

## Example

This example shows how to return the annual yield of a security that pays interest at maturity.

```javascript editor-xlsx
// How to return annual yield of a security.

// Use a function to get a security annual yield.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));
```
