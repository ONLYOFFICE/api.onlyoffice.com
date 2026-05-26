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

Merge several text strings into a single string in a spreadsheet.

```javascript editor-xlsx
// What happens when you join different text values together in a spreadsheet?

// Link multiple pieces of text to form one combined string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));
```
