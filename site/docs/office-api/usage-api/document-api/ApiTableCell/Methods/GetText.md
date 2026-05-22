# GetText

Returns the inner text of the current table cell.

## Syntax

```javascript
expression.GetText(pr);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pr | Optional | object |  | Options for formatting the returned text. |
| pr.Numbering | Optional | boolean | true | Defines if the resulting string will include numbering or not. |
| pr.Math | Optional | boolean | true | Defines if the resulting string will include mathematical expressions or not. |
| pr.TableCellSeparator | Optional | string | '\t' | Defines how the table cell separator will be specified in the resulting string. |
| pr.TableRowSeparator | Optional | string | '\r\n' | Defines how the table row separator will be specified in the resulting string. |
| pr.ParaSeparator | Optional | string | '\r\n' | Defines how the paragraph separator will be specified in the resulting string. |
| pr.TabSymbol | Optional | string | '\t' | Defines how the tab will be specified in the resulting string. |
| pr.NewLineSeparator | Optional | string | '\r' | Defines how the line separator will be specified in the resulting string. |

## Returns

string

## Example

Read the inner text of a table cell in a document.

```javascript editor-docx
// Retrieve the plain text from a table cell in a document.

// Extract text from a cell and display it in a separate paragraph below the table in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.AddText("Cell content.");
let text = cell.GetText({TableCellSeparator : ""});
let para = Api.CreateParagraph();
para.AddText("Cell text: " + text);
doc.Push(para);
```
