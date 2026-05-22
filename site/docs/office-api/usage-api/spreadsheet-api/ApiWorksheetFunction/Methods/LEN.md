# LEN

Returns the number of characters in a text string.

## Syntax

```javascript
expression.LEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text whose length will be returned. Spaces are considered as characters. |

## Returns

number

## Example

Count the number of characters in text in a spreadsheet.

```javascript editor-xlsx
// How do I find out how many letters or characters are in a text string in a spreadsheet?

// Get the total character count of any text value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEN("Online Office"));
```
