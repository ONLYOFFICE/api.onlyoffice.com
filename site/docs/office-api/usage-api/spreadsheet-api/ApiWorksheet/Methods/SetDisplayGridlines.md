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

boolean

## Example

Show or hide the gridlines on a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I turn gridlines on or off in a spreadsheet?

// Control whether the cell border lines are visible on the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
worksheet.SetDisplayGridlines(false);
```
