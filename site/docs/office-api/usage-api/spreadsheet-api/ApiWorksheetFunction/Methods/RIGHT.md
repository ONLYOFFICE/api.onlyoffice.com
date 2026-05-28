# RIGHT

Returns the specified number of characters from the end of a text string.

## Syntax

```javascript
expression.RIGHT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string that contains the characters to extract. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the substring characters. If it is omitted, the function will assume it to be 1. |

## Returns

string

## Example

Extract characters from the end of text in a spreadsheet.

```javascript editor-xlsx
// How do I get the last characters from a text string in a spreadsheet?

// Retrieve a specific number of characters from the right side of a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHT("Online Office", 2));
```
