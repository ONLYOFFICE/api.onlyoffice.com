# SetTableInd

Specifies the indentation which will be added before the leading edge of the current table in the document
(the left edge in the left-to-right table, and the right edge in the right-to-left table).

## Syntax

```javascript
expression.SetTableInd(nValue);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Set the left indentation of a table in a document.

```javascript editor-docx
// How do I control how far a table is pushed in from the left margin in a document?

// Shift a table away from the left edge by applying an indentation value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the indent of 1 inch for the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableInd(1440);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
