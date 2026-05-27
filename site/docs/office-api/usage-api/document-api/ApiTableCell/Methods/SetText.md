# SetText

Replaces all content of the current table cell with the specified text,
preserving the formatting of the first paragraph.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace all content in a table cell with plain text in a document.

```javascript editor-docx
// How do I overwrite the text of a table cell in a document?

// Clear an existing cell and write a new sentence into it, preserving formatting in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.Cells[0][0];
cell.AddText("Original cell content.");
cell.SetText("Updated cell content.");
```
