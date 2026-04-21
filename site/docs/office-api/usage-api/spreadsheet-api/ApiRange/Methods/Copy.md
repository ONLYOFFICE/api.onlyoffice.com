# Copy

Copies the range to the specified range or to the clipboard.

## Syntax

```javascript
expression.Copy(destination);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | Specifies the new range to which the specified range will be copied. If this argument is omitted, the range will be copied to the clipboard. |

## Returns

This method doesn't return any data.

## Example

Copy a range to the specified range in a spreadsheet.

```javascript editor-xlsx
// How to create identical range in a spreadsheet.

// Get a range and create a copy of it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is copied to the range A3.");
range.Copy(worksheet.GetRange("A3"));
```
