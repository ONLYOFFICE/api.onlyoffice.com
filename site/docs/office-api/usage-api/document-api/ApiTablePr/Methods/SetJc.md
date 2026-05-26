# SetJc

Specifies the alignment of the current table with respect to the text margins in the current section.

## Syntax

```javascript
expression.SetJc(sJcType);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJcType | Required | "left" \| "right" \| "center" |  | The alignment type used for the current table placement. |

## Returns

boolean

## Example

Position a table horizontally within the page margins in a document.

```javascript editor-docx
// How do I align a table to the center or sides of the page in a document?

// Place a table at a specific horizontal position relative to the surrounding text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
tablePr.SetJc("center");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
