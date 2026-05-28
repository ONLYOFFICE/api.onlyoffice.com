# AutoFit

Changes the width of the columns or the height of the rows in the range to achieve the best fit.

## Syntax

```javascript
expression.AutoFit(bRows, bCols);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRows | Optional | boolean |  | Specifies if the width of the columns will be autofit. |
| bCols | Optional | boolean |  | Specifies if the height of the rows will be autofit. |

## Returns

This method doesn't return any data.

## Example

Resize columns or rows in a range so that all content fits without being cut off in a spreadsheet.

```javascript editor-xlsx
// How do I automatically adjust column width or row height to fit the text in a spreadsheet?

// Prevent truncated text by letting the spreadsheet size each column and row to match its content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);
```
