# HYPERLINK

Creates a shortcut that jumps to another location in the current workbook, or opens a document stored on your hard drive, a network server, or on the Internet.

## Syntax

```javascript
expression.HYPERLINK(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path. |
| arg2 | Optional | string \| [ApiRange](../../ApiRange/ApiRange.md) \| number \| [ApiName](../../ApiName/ApiName.md) |  | Text or a number that is displayed in the cell. If omitted, the cell displays the link location text. |

## Returns

string

## Example

Create a clickable hyperlink to a URL or workbook location in a spreadsheet.

```javascript editor-xlsx
// How do I add a hyperlink to text in a spreadsheet?

// Link text to a website or file using a hyperlink in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPERLINK("https://example.com/files/example.xlsx", "Click here"));
```
