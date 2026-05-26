# MID

Returns the characters from the middle of a text string, given a starting position and length.

## Syntax

```javascript
expression.MID(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string from which to extract the characters. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position of the first character to extract. The first text character is 1. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the characters to extract. |

## Returns

string

## Example

Extract text from the middle of a string starting at a specific position in a spreadsheet.

```javascript editor-xlsx
// What characters can I pull from a text string in a spreadsheet?

// Get a substring from a specific position and length in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MID("Online Office", 3, 4));
```
