# SetVisible

Sets the state of sheet visibility.

## Syntax

```javascript
expression.SetVisible(isVisible);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isVisible | Required | boolean |  | Specifies if the sheet is visible or not. |

## Returns

boolean

## Example

Display or conceal a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I make a sheet visible or hidden from other users in a spreadsheet?

// Control whether a sheet appears in the tab list or remains inaccessible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
worksheet.GetRange("A1").SetValue("The current worksheet is visible.");
```
