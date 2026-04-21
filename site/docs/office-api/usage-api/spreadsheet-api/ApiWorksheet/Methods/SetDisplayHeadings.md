# SetDisplayHeadings

Specifies whether the current sheet row/column headers must be displayed or not.

## Syntax

```javascript
expression.SetDisplayHeadings(isDisplayed);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDisplayed | Required | boolean |  | Specifies whether the current sheet row/column headers must be displayed or not. The default value is **true**. |

## Returns

This method doesn't return any data.

## Example

Specify whether the sheet row/column headers must be displayed or not in a spreadsheet.

```javascript editor-xlsx
// How to set whether sheet headings should be displayed or not in a spreadsheet.

// Set a boolean value representing whether to display row/column headings or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);
```
