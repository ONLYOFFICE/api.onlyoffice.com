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

Find text in a table cell by a string and by a regular expression, then bold the matches.

```javascript editor-docx
// Look up a keyword in the cell and match it case-insensitively with a RegExp.

// Bold the second keyword match, then bold every match found by the /cell/gi expression.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1. This cell is in the first row.");
doc.Push(table);

let cell = table.GetCell(0, 0);
let byKeyword = cell.Search("Cell");
byKeyword[1].SetBold(true);

let byRegExp = cell.Search(/cell/gi);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
