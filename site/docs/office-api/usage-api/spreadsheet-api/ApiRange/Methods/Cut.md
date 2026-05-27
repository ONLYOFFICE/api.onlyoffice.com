# Cut

Cuts the range and save it to the clipboard or paste it to the specified range.

## Syntax

```javascript
expression.Cut(destination);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | Specifies the new range to which the cut range will be pasted. If this argument is omitted, the range will be copied to the clipboard. |

## Returns

This method doesn't return any data.

## Example

Move a range of cells from one location to another in a spreadsheet.

```javascript editor-xlsx
// How do I relocate a group of cells and remove them from their original position in a spreadsheet?

// Transfer cell content to a new spot, leaving the source cells empty in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is move to the range A3.");
range.Cut(worksheet.GetRange("A3"));
```
