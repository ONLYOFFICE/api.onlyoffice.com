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

Count the byte length of text for languages with multi-byte characters in a spreadsheet.

```javascript editor-xlsx
// How do I measure text length in Chinese, Japanese, or other double-byte languages in a spreadsheet?

// Get the byte count of text instead of character count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LENB("Online Office"));
```
