# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

```javascript
expression.ReplaceTextSmart(textStrings, tab, newLine);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textStrings | Required | string[] |  | An array of replacement strings. |
| tab | Optional | string | "\t" | A character which is used to specify the tab in the source text. |
| newLine | Optional | string | "\r\n" | A character which is used to specify the line break character in the source text. |

## Returns

boolean

## Example

Replace the text in each selected cell with a new value from a list in a spreadsheet.

```javascript editor-xlsx
// How do I swap out the contents of multiple cells at once using a set of replacement values in a spreadsheet?

// Overwrite selected cell values in bulk using a matching array of strings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:A2");
range.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);
```
