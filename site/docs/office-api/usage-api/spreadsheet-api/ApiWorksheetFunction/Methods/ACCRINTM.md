# ACCRINTM

Returns the accrued interest for a security that pays interest at maturity.

## Syntax

```javascript
expression.ACCRINTM(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The issue date of the security, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the security, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The annual coupon rate of the security. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The par value of the security. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The day count basis to use: **0** or omitted - US (NASD) 30/360; **1** - Actual/actual; **2** - Actual/360; **3** - Actual/365; **4** - European 30/360. |

## Returns

number

## Example

This example shows how to return the accrued interest for a security that pays interest at maturity.

```javascript editor-xlsx
// How to get an accrued interest for a security that pays periodic interest at maturity.

// Get a function that gets accrued interest for a security at maturity.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));
```
