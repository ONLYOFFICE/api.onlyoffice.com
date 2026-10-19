# GetTableTitle

Returns the table title.

## Syntax

```javascript
expression.GetTableTitle();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the title of a table in a PDF.

```javascript editor-pdf
// Read back the accessible title of a table in a PDF.

// Create a table, set its title, and display the title in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableTitle('Quarterly Report');
const title = table.GetTableTitle();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table title: ' + title);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
