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

Change the width of the columns or the height of the rows in the range to achieve the best fit in a spreadsheet.

```javascript editor-xlsx
// How to set an autofit for width or height for a range in a spreadsheet.

// Get a range and apply autofit property in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);
```
