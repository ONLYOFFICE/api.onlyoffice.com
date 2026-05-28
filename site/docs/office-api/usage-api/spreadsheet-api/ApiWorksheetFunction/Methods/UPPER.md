# UPPER

Converts a text string to all uppercase letters.

## Syntax

```javascript
expression.UPPER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text which will be converted to uppercase, a reference or a text string. |

## Returns

string

## Example

Convert a text string to all uppercase letters in a spreadsheet.

```javascript editor-xlsx
// The UPPER function transforms text by converting lowercase characters to uppercase.

// Apply the function to convert all letters to uppercase in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UPPER("Online Office"));
```
