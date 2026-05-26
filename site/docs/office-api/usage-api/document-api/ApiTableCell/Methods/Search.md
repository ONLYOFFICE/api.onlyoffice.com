# Search

Searches for a scope of a table cell object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)[]

## Example

Search for specific text inside a table cell in a document.

```javascript editor-docx
// How do I find a particular word within a table cell in a document?

// Locate matching text in a cell and apply formatting to the results in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1. This cell is in the first row.");
doc.Push(table);
let searchResults = table.GetCell(0, 0).Search("Cell");
searchResults[1].SetBold(true);
```
