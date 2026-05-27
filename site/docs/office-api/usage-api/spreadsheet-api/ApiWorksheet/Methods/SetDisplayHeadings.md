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

boolean

## Example

Show or hide the row and column headings on a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I toggle the row and column headers on or off in a spreadsheet?

// Control whether the letter and number labels along the edges of the sheet are visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);
```
