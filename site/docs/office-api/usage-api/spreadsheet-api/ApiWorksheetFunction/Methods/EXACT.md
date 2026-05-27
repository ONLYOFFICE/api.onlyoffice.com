# EXACT

Checks whether two text strings are exactly the same, and returns - **true** or - **false**. This function is case-sensitive.

## Syntax

```javascript
expression.EXACT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The first text string. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The second text string. |

## Returns

boolean

## Example

Check whether two text strings are exactly the same, and return true or false. This function is case-sensitive in a spreadsheet.

```javascript editor-xlsx
// Compare two text strings with case sensitivity.

// Verify if two texts are identical using EXACT function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXACT("MyPassword", "mypassword"));
```
