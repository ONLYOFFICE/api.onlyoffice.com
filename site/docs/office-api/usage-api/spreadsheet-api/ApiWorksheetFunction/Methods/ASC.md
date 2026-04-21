# ASC

For double-byte character set (DBCS) languages, the function changes full-width (double-byte) characters to half-width (single-byte) characters.

## Syntax

```javascript
expression.ASC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text or a reference to a cell containing the text to change. |

## Returns

string

## Example

Show for double-byte character set (DBCS) languages, the function changes full-width (double-byte) characters to half-width (single-byte) characters in a spreadsheet.

```javascript editor-xlsx
// How to make characters half-width (single-byte) characters in a spreadsheet.

// Use function to make characters half-width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
