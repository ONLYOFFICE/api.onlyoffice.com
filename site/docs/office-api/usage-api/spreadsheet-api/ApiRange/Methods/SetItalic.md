# SetItalic

Sets the italic property to the text characters in the current cell or cell range.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the contents of the current cell / cell range are displayed italicized. |

## Returns

boolean

## Example

Display cell text in italic style in a spreadsheet.

```javascript editor-xlsx
// How do I make the text inside a cell appear slanted in a spreadsheet?

// Emphasize content by switching the font to italic in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Italicized text");
worksheet.GetRange("A2").SetItalic(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
