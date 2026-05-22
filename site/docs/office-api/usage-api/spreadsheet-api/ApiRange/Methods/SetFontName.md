# SetFontName

Sets the specified font family as the font name for the current cell range.

## Syntax

```javascript
expression.SetFontName(sName);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The font family name used for the current cell range. |

## Returns

boolean

## Example

Change the font family used in a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I switch the typeface for a group of cells in a spreadsheet?

// Apply a named font to all text within a range of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontName("Arial");
```
