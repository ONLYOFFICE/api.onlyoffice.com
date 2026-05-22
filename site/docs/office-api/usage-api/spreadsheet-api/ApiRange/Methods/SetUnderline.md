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
| undelineType | Required | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' |  | Specifies the type of the |

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
