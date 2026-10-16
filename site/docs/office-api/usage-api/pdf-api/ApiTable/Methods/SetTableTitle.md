# SetTableTitle

Sets the table title.

## Syntax

```javascript
expression.SetTableTitle(title);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | Required | string |  | The table title to be set. |

## Returns

boolean

## Example

Set the title of a table in a PDF.

```javascript editor-pdf
// Give a table an accessible title in a PDF.

// Create a table, set its title, and display the title in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableTitle('Quarterly Report');
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table title: ' + table.GetTableTitle());
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
