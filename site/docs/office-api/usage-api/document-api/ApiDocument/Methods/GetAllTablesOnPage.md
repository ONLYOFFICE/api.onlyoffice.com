# GetAllTablesOnPage

Returns a collection of tables on a given absolute page.
💡 This method can be a little bit slow, because it runs the document calculation
process to arrange tables on the specified page.

## Syntax

```javascript
expression.GetAllTablesOnPage(nPage);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | Required | number |  | The page index. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)[]

## Example

Retrieve all tables on a specific page in a document.

```javascript editor-docx
// How do I collect every table that appears on a given page in a document?

// Remove the first row of the first table on the page to delete its header row.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
doc.Push(table);
let tables = doc.GetAllTablesOnPage(0);
let row1 = tables[0].GetRow(0);
row1.Remove();
```
