# Search

Searches for a scope of a table row object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)[]

## Example

Find text in a table row by a string and by a regular expression, then bold the matches.

```javascript editor-docx
// Look up a keyword across the row cells and match the same word with a RegExp.

// Bold one keyword match, then bold every occurrence found by the /text/g expression.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("text");
row.GetCell(1).GetContent().GetElement(0).AddText("text");
row.GetCell(2).GetContent().GetElement(0).AddText("text");
doc.Push(table);

let byKeyword = row.Search("tex", true);
byKeyword[1].SetBold(true);

let byRegExp = row.Search(/text/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
