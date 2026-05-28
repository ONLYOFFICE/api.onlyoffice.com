# CHAR

Returns the character specified by the code number from your computer's character set.

## Syntax

```javascript
expression.CHAR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number between 1 and 255 specifying a character from the computer character set. |

## Returns

string

## Example

Convert a numeric code to its character symbol in a spreadsheet.

```javascript editor-xlsx
// What character does a number code represent in a spreadsheet?

// Display the letter or symbol matching a code value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHAR(234));
```
