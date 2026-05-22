# MIDB

Extracts the characters from the specified string starting from any position and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

## Syntax

```javascript
expression.MIDB(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string from which to extract the characters. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position of the first character to extract. The first text character is 1. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the characters to extract, based on bytes. |

## Returns

string

## Example

Extract text from a double-byte character string at a specific position in a spreadsheet.

```javascript editor-xlsx
// What characters do I get from a DBCS string in a spreadsheet?

// Retrieve a substring from a string designed for Asian languages in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MIDB("Online Office", 3, 4));
```
