# CONCATENATE

Combines multiple text strings into one text string.

## Syntax

```javascript
expression.CONCATENATE(arg_n);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg_n | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | Up to 255 data values that will be combined. |

## Returns

string

## Example

Combine multiple text strings into one text string in a spreadsheet.

```javascript editor-xlsx
// How to add multiple text strings into one text string in a spreadsheet.

// Use function to create one text string from multiple ones in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));
```
