# SetTableInd

Specifies the indentation which will be added before the leading edge of the current table in the document (the left edge in the left-to-right table, and the right edge in the right-to-left table).

Inherited from [ApiTablePr.SetTableInd](../../ApiTablePr/Methods/SetTableInd.md).

## Syntax

```javascript
expression.SetTableInd(nValue);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Shift a table away from the left margin by a set amount in a document.

```javascript editor-docx
// How do I indent a table from the left edge of the page in a document?

// Control the horizontal offset of a table from the page margin in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the indent of 1 inch for the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
table.SetTableInd(1440);
doc.Push(table);
```
