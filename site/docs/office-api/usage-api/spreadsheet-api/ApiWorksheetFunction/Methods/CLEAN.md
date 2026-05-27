# CLEAN

Removes all the nonprintable characters from the text.

## Syntax

```javascript
expression.CLEAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | A string from which nonprintable characters will be removed. |

## Returns

string

## Example

Remove invisible control characters from imported or pasted text in a spreadsheet.

```javascript editor-xlsx
// Eliminate all nonprintable characters that don't display properly in your cells in a spreadsheet.

// Purify text data by stripping out hidden formatting and special characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CLEAN("\ntext"));
```
