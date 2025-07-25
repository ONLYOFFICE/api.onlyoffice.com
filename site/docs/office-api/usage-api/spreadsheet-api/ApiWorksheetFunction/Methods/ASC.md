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

This example shows for double-byte character set (DBCS) languages, the function changes full-width (double-byte) characters to half-width (single-byte) characters.

```javascript editor-xlsx
// How to make characters half-width (single-byte) characters.

// Use function to make characters half-width.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
