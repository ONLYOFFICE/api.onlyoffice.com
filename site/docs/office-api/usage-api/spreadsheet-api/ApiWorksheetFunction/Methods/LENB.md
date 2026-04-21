# LENB

Analyses the specified string and returns the number of characters it contains and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

## Syntax

```javascript
expression.LENB(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text whose length will be returned. Spaces are considered as characters. |

## Returns

number

## Example

Analyse the specified string and return the number of characters it contains and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc in a spreadsheet.

```javascript editor-xlsx
// How to analyse the specified string and get its length in a spreadsheet.

// Use a function to analyse a string, get length of a string and its intended language in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LENB("Online Office"));
```
