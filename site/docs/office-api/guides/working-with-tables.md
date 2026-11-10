---
sidebar_position: -1
description: Create tables in a document, move through their rows and cells, read cell text without the trailing separator, and change the table structure.
---

# Working with tables

This guide shows how to work with tables in [Document API](../usage-api/document-api/document-api.md): create a table and fill it, find the tables in a document, move through their rows and cells, read cell text, and change the table structure. The examples run in the document editor below each code block, and the same code works in macros, plugins and Document Builder scripts.

## Table object model

A table is a tree of four classes:

| Class | Contains | Get it with |
| ----- | -------- | ----------- |
| [ApiTable](../usage-api/document-api/ApiTable/ApiTable.md) | Rows | [Api/CreateTable](../usage-api/document-api/Api/Methods/CreateTable.md), [ApiDocument/GetAllTables](../usage-api/document-api/ApiDocument/Methods/GetAllTables.md), [ApiDocument/GetActiveTable](../usage-api/document-api/ApiDocument/Methods/GetActiveTable.md) |
| [ApiTableRow](../usage-api/document-api/ApiTableRow/ApiTableRow.md) | Cells | [ApiTable/GetRow](../usage-api/document-api/ApiTable/Methods/GetRow.md) |
| [ApiTableCell](../usage-api/document-api/ApiTableCell/ApiTableCell.md) | One document content object | [ApiTable/GetCell](../usage-api/document-api/ApiTable/Methods/GetCell.md), [ApiTableRow/GetCell](../usage-api/document-api/ApiTableRow/Methods/GetCell.md) |
| [ApiDocumentContent](../usage-api/document-api/ApiDocumentContent/ApiDocumentContent.md) | Paragraphs and nested tables | [ApiTableCell/GetContent](../usage-api/document-api/ApiTableCell/Methods/GetContent.md) |

A cell is a small document of its own: it always holds at least one paragraph, and it can hold several paragraphs and other tables.

## Creating a table and inserting text

[Api/CreateTable](../usage-api/document-api/Api/Methods/CreateTable.md) creates a table with the given number of rows and columns. Each new cell holds one empty paragraph. The table is not part of the document until you add it with [ApiDocument/Push](../usage-api/document-api/ApiDocument/Methods/Push.md) or [ApiDocument/InsertContent](../usage-api/document-api/ApiDocument/Methods/InsertContent.md).

To fill a cell, use [ApiTableCell/SetText](../usage-api/document-api/ApiTableCell/Methods/SetText.md), which replaces the cell content and keeps the formatting of its first paragraph, or [ApiTableCell/AddText](../usage-api/document-api/ApiTableCell/Methods/AddText.md), which appends text to it.

```ts editor-docx
let doc = Api.GetDocument();
let data = [
  ["Product", "Q1", "Q2"],
  ["Apples", "120", "135"],
  ["Pears", "80", "95"],
];

let table = Api.CreateTable(data.length, data[0].length);
table.SetStyle(doc.GetStyle("Bordered"));
table.SetWidth("percent", 100);
doc.Push(table);

for (let r = 0; r < data.length; r++) {
  for (let c = 0; c < data[r].length; c++) {
    table.GetCell(r, c).SetText(data[r][c]);
  }
}
table.GetRow(0).SetTableHeader(true);
```

[ApiTableRow/SetTableHeader](../usage-api/document-api/ApiTableRow/Methods/SetTableHeader.md) repeats the row at the top of each page the table spans.

## Finding tables in a document

- [ApiDocument/GetAllTables](../usage-api/document-api/ApiDocument/Methods/GetAllTables.md) returns every table in the document, including tables nested inside cells. An outer table comes before the tables nested in it.
- [ApiDocument/GetActiveTable](../usage-api/document-api/ApiDocument/Methods/GetActiveTable.md) returns the table that contains the cursor, or `null` if the cursor is not in a table.
- [ApiDocumentContent/GetAllTables](../usage-api/document-api/ApiDocumentContent/Methods/GetAllTables.md) returns the tables inside one content object, for example inside a cell.

## Moving through rows and cells

[ApiTable/GetRowsCount](../usage-api/document-api/ApiTable/Methods/GetRowsCount.md) and [ApiTableRow/GetCellsCount](../usage-api/document-api/ApiTableRow/Methods/GetCellsCount.md) give the loop bounds. Count the cells of each row separately: rows can have different numbers of cells.

```ts
for (let r = 0; r < table.GetRowsCount(); r++) {
  let row = table.GetRow(r);
  for (let c = 0; c < row.GetCellsCount(); c++) {
    let cell = row.GetCell(c);
    // ...
  }
}
```

[ApiTable/GetAllCells](../usage-api/document-api/ApiTable/Methods/GetAllCells.md) returns the same cells as one array, row by row.

Keep in mind:

- Indexes start at `0`. [ApiTable/GetCell](../usage-api/document-api/ApiTable/Methods/GetCell.md) and [ApiTableRow/GetCell](../usage-api/document-api/ApiTableRow/Methods/GetCell.md) throw an error for an index outside the table, so check the counts first.
- The cell index is the position of the cell **in its row**, not the column. After cells in a row are merged horizontally, the row has fewer cells, and [ApiTable/GetColumnsCount](../usage-api/document-api/ApiTable/Methods/GetColumnsCount.md), which counts the columns of the table grid, no longer matches it.
- [ApiTableCell/GetRowIndex](../usage-api/document-api/ApiTableCell/Methods/GetRowIndex.md) and [ApiTableCell/GetIndex](../usage-api/document-api/ApiTableCell/Methods/GetIndex.md) return the position of a cell you already have.

```ts editor-docx
let doc = Api.GetDocument();
let table = Api.CreateTable(2, 3);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);

table.MergeCells([table.GetCell(0, 0), table.GetCell(0, 1)]);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Columns: " + table.GetColumnsCount());
paragraph.AddLineBreak();
paragraph.AddText("Cells in row 0: " + table.GetRow(0).GetCellsCount());
paragraph.AddLineBreak();
paragraph.AddText("Cells in row 1: " + table.GetRow(1).GetCellsCount());
doc.Push(paragraph);
```

## Reading text from a cell

Every paragraph ends with a paragraph mark, and `GetText` returns that mark as a separator at the end of the text. Inside a table, the separator depends on where the paragraph is:

| Paragraph | Trailing separator | Option that sets it | Default |
| --------- | ------------------ | ------------------- | ------- |
| The last paragraph of a cell that is not the last cell in its row | Cell separator | `TableCellSeparator` | `"\t"` |
| The last paragraph of the last cell in a row | Row separator | `TableRowSeparator` | `"\r\n"` |
| Any other paragraph | Paragraph separator | `ParaSeparator` | `"\r\n"` |

This is what makes the text of a whole table read as tab-separated lines. When you read a single cell, though, the separator is extra: a cell that contains `Product` returns `"Product\t"`, and an empty cell returns `"\t"`, not `""`. Comparing the text with a value, checking for an empty cell or copying the text to another cell then gives the wrong result.

The same happens when you go down to the paragraph: [ApiParagraph/GetText](../usage-api/document-api/ApiParagraph/Methods/GetText.md) also returns the separator, and it has no option to leave it out.

```ts editor-docx
let doc = Api.GetDocument();
let table = Api.CreateTable(1, 2);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
table.GetCell(0, 0).SetText("Product");
table.GetCell(0, 1).SetText("Q1");

let first = table.GetCell(0, 0);
let last = table.GetCell(0, 1);

let paragraph = Api.CreateParagraph();
paragraph.AddText("First cell: " + JSON.stringify(first.GetText()));
paragraph.AddLineBreak();
paragraph.AddText("Last cell: " + JSON.stringify(last.GetText()));
paragraph.AddLineBreak();
paragraph.AddText("First paragraph: " + JSON.stringify(first.GetContent().GetElement(0).GetText()));
doc.Push(paragraph);
```

### Returning text without the separator

Read the text from the cell, not from its paragraph, and set both table separators to an empty string with [ApiTableCell/GetText](../usage-api/document-api/ApiTableCell/Methods/GetText.md). Set both, because which one a cell gets depends on whether it is the last in its row:

```ts
function getCellText(cell) {
  return cell.GetText({
    TableCellSeparator: "",
    TableRowSeparator: "",
    ParaSeparator: "\n",
    Numbering: false,
  });
}
```

- `ParaSeparator` joins the paragraphs of a cell that has more than one. Only the separator after the last paragraph is replaced by the table separators.
- `Numbering` defaults to `true`, so the list numbers of numbered paragraphs are included in the text. Set it to `false` to return only the text the user typed.

The same options work on [ApiDocumentContent/GetText](../usage-api/document-api/ApiDocumentContent/Methods/GetText.md), if you already have the content of the cell.

:::tip
Calling `.trim()` on the result also removes the separator, and many samples do that. It also removes spaces and tabs that are part of the cell text, so use the options when that whitespace matters.
:::

### Returning the contents of each cell

The following example reads the whole table into a two-dimensional array and checks which cells are empty:

```ts editor-docx
let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
let data = [
  ["Product", "Q1", "Q2"],
  ["Apples", "120", ""],
  ["Pears", "80", "95"],
];
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    table.GetCell(r, c).SetText(data[r][c]);
  }
}

function getCellText(cell) {
  return cell.GetText({TableCellSeparator: "", TableRowSeparator: "", ParaSeparator: "\n", Numbering: false});
}

let values = [];
let empty = [];
for (let r = 0; r < table.GetRowsCount(); r++) {
  let row = table.GetRow(r);
  values.push([]);
  for (let c = 0; c < row.GetCellsCount(); c++) {
    let text = getCellText(row.GetCell(c));
    values[r].push(text);
    if (text === "") {
      empty.push("(" + r + ", " + c + ")");
    }
  }
}

let paragraph = Api.CreateParagraph();
paragraph.AddText("Values: " + JSON.stringify(values));
paragraph.AddLineBreak();
paragraph.AddText("Empty cells: " + empty.join(", "));
doc.Push(paragraph);
```

## Changing the table structure

| Task | Method |
| ---- | ------ |
| Add rows | [ApiTable/AddRow](../usage-api/document-api/ApiTable/Methods/AddRow.md), [ApiTable/AddRows](../usage-api/document-api/ApiTable/Methods/AddRows.md) |
| Add columns | [ApiTable/AddColumn](../usage-api/document-api/ApiTable/Methods/AddColumn.md), [ApiTable/AddColumns](../usage-api/document-api/ApiTable/Methods/AddColumns.md) |
| Remove a row or a column | [ApiTable/RemoveRow](../usage-api/document-api/ApiTable/Methods/RemoveRow.md), [ApiTable/RemoveColumn](../usage-api/document-api/ApiTable/Methods/RemoveColumn.md), [ApiTableRow/Remove](../usage-api/document-api/ApiTableRow/Methods/Remove.md) |
| Merge cells | [ApiTable/MergeCells](../usage-api/document-api/ApiTable/Methods/MergeCells.md) |
| Split a cell | [ApiTable/Split](../usage-api/document-api/ApiTable/Methods/Split.md) |

The add and remove methods take a cell, not an index: the new row or column goes before or after the row or column of that cell, and the remove methods delete the row or column that contains it. Without a cell, `AddRow` and `AddColumn` add to the end of the table.

Adding or removing rows shifts the indexes of the rows after them. To remove rows in a loop, go from the last row to the first. Removing the last remaining row deletes the whole table.

The following example removes every row whose second cell is empty:

```ts editor-docx
let doc = Api.GetDocument();
let table = Api.CreateTable(4, 2);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
let data = [["Apples", "120"], ["Pears", ""], ["Plums", "40"], ["Figs", ""]];
for (let r = 0; r < data.length; r++) {
  table.GetCell(r, 0).SetText(data[r][0]);
  table.GetCell(r, 1).SetText(data[r][1]);
}

for (let r = table.GetRowsCount() - 1; r >= 0; r--) {
  let cell = table.GetCell(r, 1);
  if (cell.GetText({TableCellSeparator: "", TableRowSeparator: ""}) === "") {
    table.RemoveRow(cell);
  }
}
```

## Samples

- [Creating table document](../samples/document-editor/creating-table-document.md)
- [Creating table from JSON data](../samples/document-editor/creating-table-from-json-data.md)
- [Creating table with nested headers](../samples/document-editor/creating-table-with-nested-headers.md)
- [Creating auto-width table](../samples/document-editor/creating-auto-width-table.md)
- [Sort tables](../../macros/samples/document-editor/sort-tables.md) (macro)
- [Remove empty tables](../../macros/samples/document-editor/remove-empty-tables.md) (macro)
- [Paragraphs to table](../../macros/samples/document-editor/paragraphs-to-table.md) (macro)
