# GetRows

Returns a Range object that represents the rows in the specified range. If the specified row is outside the Range object, a new Range will be returned that represents the cells between the columns of the original range in the specified row.

## Syntax

```javascript
expression.GetRows(nRow);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row number (starts counting from 1, the 0 value returns an error). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Access individual rows within a range to update their values in a spreadsheet.

```javascript editor-xlsx
// How do I iterate over each row in a range and set its value in a spreadsheet?

// Fill a multi-row range by writing a different value into each row one at a time in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("1:3");
for (let i=1; i <= 3; i++) {
	let rows = range.GetRows(i);    
	rows.SetValue(i);
}
```
