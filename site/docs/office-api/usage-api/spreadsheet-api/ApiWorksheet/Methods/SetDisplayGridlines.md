# SetDisplayGridlines

Specifies whether the current sheet gridlines must be displayed or not.

## Syntax

```javascript
expression.SetDisplayGridlines(isDisplayed);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDisplayed | Required | boolean |  | Specifies whether the current sheet gridlines must be displayed or not. The default value is **true**. |

## Returns

This method doesn't return any data.

## Example

Specify whether the sheet gridlines must be displayed or not in a spreadsheet.

```javascript editor-xlsx
// How to set whether sheet gridlines should be displayed or not in a spreadsheet.

// Set a boolean value representing whether to display gridlines or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);
```
