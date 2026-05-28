# FIND

Returns the starting position of one text string within another text string. This function is case-sensitive.

## Syntax

```javascript
expression.FIND(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text to find. Use double quotes (empty text) to match the first character in the search string. Wildcard characters are not allowed. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text containing the text to find. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Specifies the character at which to start the search. The first character in the search string is character number 1. If omitted, this parameter is equal to 1. |

## Returns

number

## Example

Find the position of a substring within text in a spreadsheet.

```javascript editor-xlsx
// How do I search for specific text inside a larger text string in a spreadsheet?

// Locate where one piece of text begins within another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIND("line", "Online Office"));
```
