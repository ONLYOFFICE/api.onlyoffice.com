# MDURATION

Returns the modified Macauley duration of a security with an assumed par value of $100.

## Syntax

```javascript
expression.MDURATION(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The security settlement date, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the security, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The annual coupon rate of the security. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The annual yield of the security. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of interest payments per year. The possible values are: 1 for annual payments, 2 for semiannual payments, 4 for quarterly payments. |
| arg6 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The day count basis to use: **0** or omitted - US (NASD) 30/360; **1** - Actual/actual; **2** - Actual/360; **3** - Actual/365; **4** - European 30/360. |

## Returns

number

## Example

This example shows how to return modified Macauley duration of a security with an assumed par value of $100.

```javascript editor-xlsx
// How to get a modified Macauley duration of a security.

// Use a function to get a result from modified Macauley duration.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.MDURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));
```
