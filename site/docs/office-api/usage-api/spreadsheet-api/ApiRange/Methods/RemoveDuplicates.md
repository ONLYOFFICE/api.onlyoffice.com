# RemoveDuplicates

Removes the rows with duplicate values from the range, as the Remove Duplicates command does. A range inside a table stands for the whole table, and the autofilter range or one cell of it stands for the filtered range. Rows are duplicates when the displayed values of the compared columns are equal, case-insensitively; the first of them is kept. The other rows of the range move up in place of the removed ones; the cells outside the range stay in place.

## Syntax

```javascript
expression.RemoveDuplicates(aColumns, sHeader);
```

`expression` - A variable that represents an [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aColumns | Optional | number \| number[] |  | The 1-based indexes of the columns to compare, counted from the first column of the range, or of the table or the autofilter that the range stands for. If omitted, all the columns are compared. |
| sHeader | Optional | [XlYesNoGuess](../../Enumeration/XlYesNoGuess.md) | "xlNo" | Specifies whether the first row is a header row, which is kept and not compared, or "xlGuess" to detect it as the command does. The value may be in any case and without "xl", e.g. "yes"; other values throw an error. The header row of a table or an autofilter is always kept. |

## Returns

number \| null

## Example

Remove the rows that repeat the values of the chosen columns from a range in a spreadsheet.

```javascript editor-xlsx
// How do I delete duplicate rows from a list and keep the first of each in a spreadsheet?

// Clean up an order list by removing the repeated customer and product pairs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C6").SetValue([
    ["Customer", "Product", "Qty"],
    ["Anna", "Tea", 2],
    ["Boris", "Coffee", 1],
    ["Anna", "Tea", 5],
    ["Clara", "Tea", 3],
    ["Boris", "Coffee", 4]
]);
let removed = worksheet.GetRange("A1:C6").RemoveDuplicates([1, 2], "xlYes");
worksheet.GetRange("E1").SetValue("Removed rows: " + removed);
```
