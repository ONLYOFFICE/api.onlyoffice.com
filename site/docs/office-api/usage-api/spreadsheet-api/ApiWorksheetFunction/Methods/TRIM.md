# TRIM

Removes all spaces from a text string except for single spaces between words.

## Syntax

```javascript
expression.TRIM(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text from which the spaces will be removed. |

## Returns

string

## Example

Remove all spaces from a text string except for single spaces between words in a spreadsheet.

```javascript editor-xlsx
// How to delete unneccessary spaces from the text in a spreadsheet.

// Use a function to clear spaces from a string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));
```
