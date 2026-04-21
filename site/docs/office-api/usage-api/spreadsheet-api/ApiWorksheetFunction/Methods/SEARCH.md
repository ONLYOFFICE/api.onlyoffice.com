# SEARCH

Returns the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive).

## Syntax

```javascript
expression.SEARCH(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text to find. The ? and * wildcard characters can be used. Use ~? and ~* to find the ? and * characters. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text where to search for the specified text. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The character number in the search text, counting from the left, at which to start searching. If omitted, 1 is used. |

## Returns

number

## Example

Return the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive) in a spreadsheet.

```javascript editor-xlsx
// How to get number of characters counting from first occurance of search text in a spreadsheet.

// Use a function to count characters starting from the index at which the search text appears in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCH("line", "Online Office"));
```
