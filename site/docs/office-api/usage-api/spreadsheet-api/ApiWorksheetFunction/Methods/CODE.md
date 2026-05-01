# CODE

Returns the code number from your computer's character set for the first character in the specified text string.

## Syntax

```javascript
expression.CODE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text for which to get the code of the first character. |

## Returns

number

## Example

Return the code number from your computer's character set for the first character in the specified text string in a spreadsheet.

```javascript editor-xlsx
// How to return the code number from your computer's character set in a spreadsheet.

// Use function to get a code number from your computer's character set in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CODE("office"));
```
