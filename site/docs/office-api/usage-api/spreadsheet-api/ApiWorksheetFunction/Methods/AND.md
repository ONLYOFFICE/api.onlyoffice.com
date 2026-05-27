# AND

Checks whether all conditions in a test are - **true**.

## Syntax

```javascript
expression.AND(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | A condition to check. |

## Returns

boolean

## Example

Test whether all conditions are true at the same time in a spreadsheet.

```javascript editor-xlsx
// Use the AND function to verify multiple criteria are met in a spreadsheet.

// Validate that every condition passes together to get a true/false result in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);
```
