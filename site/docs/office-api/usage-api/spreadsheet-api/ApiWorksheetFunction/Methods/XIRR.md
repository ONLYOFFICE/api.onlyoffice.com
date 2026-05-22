# XIRR

Returns the internal rate of return for a schedule of cash flows.

## Syntax

```javascript
expression.XIRR(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range that contains the series of cash flows that corresponds to a schedule of payments in dates. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range that contains the schedule of payment dates that corresponds to the cash flow payments. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An estimate at what the internal rate of return will be. If it is omitted, the function will assume guess to be 0.1 (10 percent). |

## Returns

number

## Example

Calculate the internal rate of return for a series of dated cash flows in a spreadsheet.

```javascript editor-xlsx
// How do I find the internal rate of return when cash flows occur on specific dates in a spreadsheet?

// Determine the annual rate of return based on irregular payment timing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];
let dates = ["Dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}
for (let j = 0; j < dates.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(dates[j]);
}

worksheet.GetRange("B1").SetColumnWidth(15);
let range1 = worksheet.GetRange("A2:A5");
let range2 = worksheet.GetRange("B2:B5");
worksheet.GetRange("C5").SetValue(func.XIRR(range1, range2));
```
