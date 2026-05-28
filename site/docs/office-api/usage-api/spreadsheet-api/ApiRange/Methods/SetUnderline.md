# SetUnderline

Specifies that the contents of the current cell / cell range are displayed along with a line appearing directly below the character.

## Syntax

```javascript
expression.SetUnderline(undelineType);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| undelineType | Required | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' |  | Specifies the type of the line displayed under the characters. The following values are available: **"none"** - for no underlining; **"single"** - for a single line underlining the cell contents; **"singleAccounting"** - for a single line underlining the cell contents but not protruding beyond the cell borders; **"double"** - for a double line underlining the cell contents; **"doubleAccounting"** - for a double line underlining the cell contents but not protruding beyond the cell borders. |

## Returns

boolean

## Example

Add an underline beneath the text in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I underline the contents of a cell in a spreadsheet?

// Highlight or emphasize cell text by placing a line under it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The text underlined with a single line");
worksheet.GetRange("A2").SetUnderline("single");
worksheet.GetRange("A4").SetValue("Normal text");
```
