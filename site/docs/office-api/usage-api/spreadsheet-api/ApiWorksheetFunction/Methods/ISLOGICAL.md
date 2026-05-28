# ISLOGICAL

Checks whether a value is a logical value (- **true** or - **false**), and returns - **true** or - **false**.

## Syntax

```javascript
expression.ISLOGICAL(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

Test whether a cell contains a logical value (true or false) in a spreadsheet.

```javascript editor-xlsx
// How do I determine if a cell holds a boolean value in a spreadsheet?

// Use a function to distinguish between logical values and other data types in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("66");

let func = Api.WorksheetFunction;
let result = func.ISLOGICAL(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
```
