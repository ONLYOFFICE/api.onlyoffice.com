# SetPrintHeadings

Specifies whether the current sheet row/column headers must be printed or not.

## Syntax

```javascript
expression.SetPrintHeadings(bPrint);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Specifies whether the current sheet row/column headers must be printed or not. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the current sheet row/column headers must be printed or not.

```javascript editor-xlsx
// How to set whether sheet headings should be printed or not.

// Set a boolean value representing whether to print row/column headings or not.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());

```
