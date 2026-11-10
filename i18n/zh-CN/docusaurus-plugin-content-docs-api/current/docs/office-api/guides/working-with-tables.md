---
sidebar_position: -1
description: 在文档中创建表格，遍历表格的行和单元格，读取不带末尾分隔符的单元格文本，以及更改表格结构。
---

# 使用表格

本指南介绍如何在 [Document API](../usage-api/document-api/document-api.md) 中使用表格：创建并填充表格、查找文档中的表格、遍历表格的行和单元格、读取单元格文本以及更改表格结构。示例在每个代码块下方的文档编辑器中运行，相同的代码也适用于宏、插件和 Document Builder 脚本。

## 表格对象模型

表格是由四个类组成的树：

| 类 | 包含 | 获取方法 |
| -- | ---- | -------- |
| [ApiTable](../usage-api/document-api/ApiTable/ApiTable.md) | 行 | [Api/CreateTable](../usage-api/document-api/Api/Methods/CreateTable.md)、[ApiDocument/GetAllTables](../usage-api/document-api/ApiDocument/Methods/GetAllTables.md)、[ApiDocument/GetActiveTable](../usage-api/document-api/ApiDocument/Methods/GetActiveTable.md) |
| [ApiTableRow](../usage-api/document-api/ApiTableRow/ApiTableRow.md) | 单元格 | [ApiTable/GetRow](../usage-api/document-api/ApiTable/Methods/GetRow.md) |
| [ApiTableCell](../usage-api/document-api/ApiTableCell/ApiTableCell.md) | 一个文档内容对象 | [ApiTable/GetCell](../usage-api/document-api/ApiTable/Methods/GetCell.md)、[ApiTableRow/GetCell](../usage-api/document-api/ApiTableRow/Methods/GetCell.md) |
| [ApiDocumentContent](../usage-api/document-api/ApiDocumentContent/ApiDocumentContent.md) | 段落和嵌套表格 | [ApiTableCell/GetContent](../usage-api/document-api/ApiTableCell/Methods/GetContent.md) |

单元格本身就是一个小文档：它始终至少包含一个段落，也可以包含多个段落和其他表格。

## 创建表格并插入文本

[Api/CreateTable](../usage-api/document-api/Api/Methods/CreateTable.md) 按指定的行数和列数创建表格。每个新单元格包含一个空段落。在使用 [ApiDocument/Push](../usage-api/document-api/ApiDocument/Methods/Push.md) 或 [ApiDocument/InsertContent](../usage-api/document-api/ApiDocument/Methods/InsertContent.md) 添加表格之前，表格不属于文档。

要填充单元格，请使用 [ApiTableCell/SetText](../usage-api/document-api/ApiTableCell/Methods/SetText.md)（替换单元格内容并保留其第一个段落的格式）或 [ApiTableCell/AddText](../usage-api/document-api/ApiTableCell/Methods/AddText.md)（向单元格追加文本）。

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

[ApiTableRow/SetTableHeader](../usage-api/document-api/ApiTableRow/Methods/SetTableHeader.md) 使该行在表格跨越的每一页顶部重复显示。

## 查找文档中的表格

- [ApiDocument/GetAllTables](../usage-api/document-api/ApiDocument/Methods/GetAllTables.md) 返回文档中的所有表格，包括嵌套在单元格中的表格。外层表格排在其嵌套表格之前。
- [ApiDocument/GetActiveTable](../usage-api/document-api/ApiDocument/Methods/GetActiveTable.md) 返回包含光标的表格；如果光标不在表格中，则返回 `null`。
- [ApiDocumentContent/GetAllTables](../usage-api/document-api/ApiDocumentContent/Methods/GetAllTables.md) 返回一个内容对象（例如单元格）中的表格。

## 遍历行和单元格

[ApiTable/GetRowsCount](../usage-api/document-api/ApiTable/Methods/GetRowsCount.md) 和 [ApiTableRow/GetCellsCount](../usage-api/document-api/ApiTableRow/Methods/GetCellsCount.md) 提供循环的边界。请分别计算每一行的单元格数：各行的单元格数可能不同。

```ts
for (let r = 0; r < table.GetRowsCount(); r++) {
  let row = table.GetRow(r);
  for (let c = 0; c < row.GetCellsCount(); c++) {
    let cell = row.GetCell(c);
    // ...
  }
}
```

[ApiTable/GetAllCells](../usage-api/document-api/ApiTable/Methods/GetAllCells.md) 以一个数组逐行返回相同的单元格。

请注意：

- 索引从 `0` 开始。对于超出表格范围的索引，[ApiTable/GetCell](../usage-api/document-api/ApiTable/Methods/GetCell.md) 和 [ApiTableRow/GetCell](../usage-api/document-api/ApiTableRow/Methods/GetCell.md) 会抛出错误，因此请先检查数量。
- 单元格索引是单元格在**所在行中**的位置，而不是列。一行中的单元格水平合并后，该行的单元格数会减少，与 [ApiTable/GetColumnsCount](../usage-api/document-api/ApiTable/Methods/GetColumnsCount.md)（统计表格网格的列数）不再一致。
- [ApiTableCell/GetRowIndex](../usage-api/document-api/ApiTableCell/Methods/GetRowIndex.md) 和 [ApiTableCell/GetIndex](../usage-api/document-api/ApiTableCell/Methods/GetIndex.md) 返回已获取的单元格的位置。

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

## 读取单元格文本

每个段落都以段落标记结尾，`GetText` 会将该标记作为分隔符返回在文本末尾。在表格中，分隔符取决于段落所在的位置：

| 段落 | 末尾分隔符 | 设置它的选项 | 默认值 |
| ---- | ---------- | ------------ | ------ |
| 不是所在行最后一个单元格的单元格中的最后一个段落 | 单元格分隔符 | `TableCellSeparator` | `"\t"` |
| 行中最后一个单元格的最后一个段落 | 行分隔符 | `TableRowSeparator` | `"\r\n"` |
| 其他任何段落 | 段落分隔符 | `ParaSeparator` | `"\r\n"` |

正因如此，整个表格的文本读出来是以制表符分隔的各行。但读取单个单元格时，分隔符是多余的：包含 `Product` 的单元格返回 `"Product\t"`，空单元格返回 `"\t"` 而不是 `""`。这样一来，将文本与某个值比较、检查单元格是否为空或将文本复制到另一个单元格时，都会得到错误的结果。

深入到段落时也是如此：[ApiParagraph/GetText](../usage-api/document-api/ApiParagraph/Methods/GetText.md) 同样会返回分隔符，并且没有可省略它的选项。

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

### 返回不带分隔符的文本

请从单元格而不是其段落读取文本，并使用 [ApiTableCell/GetText](../usage-api/document-api/ApiTableCell/Methods/GetText.md) 将两个表格分隔符都设置为空字符串。两个都要设置，因为单元格使用哪一个取决于它是否为所在行的最后一个单元格：

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

- `ParaSeparator` 用于连接包含多个段落的单元格中的各段落。只有最后一个段落之后的分隔符会被表格分隔符替换。
- `Numbering` 默认为 `true`，因此编号段落的列表编号会包含在文本中。将其设置为 `false` 可只返回用户输入的文本。

如果已获取单元格的内容，相同的选项也适用于 [ApiDocumentContent/GetText](../usage-api/document-api/ApiDocumentContent/Methods/GetText.md)。

:::tip
对结果调用 `.trim()` 也能去掉分隔符，许多示例都是这样做的。但它也会去掉单元格文本中的空格和制表符，因此当这些空白字符有意义时，请使用选项。
:::

### 返回每个单元格的内容

以下示例将整个表格读入一个二维数组，并检查哪些单元格为空：

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

## 更改表格结构

| 任务 | 方法 |
| ---- | ---- |
| 添加行 | [ApiTable/AddRow](../usage-api/document-api/ApiTable/Methods/AddRow.md)、[ApiTable/AddRows](../usage-api/document-api/ApiTable/Methods/AddRows.md) |
| 添加列 | [ApiTable/AddColumn](../usage-api/document-api/ApiTable/Methods/AddColumn.md)、[ApiTable/AddColumns](../usage-api/document-api/ApiTable/Methods/AddColumns.md) |
| 删除行或列 | [ApiTable/RemoveRow](../usage-api/document-api/ApiTable/Methods/RemoveRow.md)、[ApiTable/RemoveColumn](../usage-api/document-api/ApiTable/Methods/RemoveColumn.md)、[ApiTableRow/Remove](../usage-api/document-api/ApiTableRow/Methods/Remove.md) |
| 合并单元格 | [ApiTable/MergeCells](../usage-api/document-api/ApiTable/Methods/MergeCells.md) |
| 拆分单元格 | [ApiTable/Split](../usage-api/document-api/ApiTable/Methods/Split.md) |

添加和删除方法接受单元格而不是索引：新行或新列添加在该单元格所在行或列的前面或后面，删除方法则删除包含该单元格的行或列。不指定单元格时，`AddRow` 和 `AddColumn` 会在表格末尾添加。

添加或删除行会使其后各行的索引发生变化。要在循环中删除行，请从最后一行向第一行遍历。删除最后剩下的一行会删除整个表格。

以下示例删除第二个单元格为空的所有行：

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

## 示例

- [创建表格文档](/docs/office-api/samples/document-editor/creating-table-document.md)
- [根据 JSON 数据创建表格](/docs/office-api/samples/document-editor/creating-table-from-json-data.md)
- [创建带嵌套标题的表格](/docs/office-api/samples/document-editor/creating-table-with-nested-headers.md)
- [创建自动宽度表格](/docs/office-api/samples/document-editor/creating-auto-width-table.md)
- [表格排序](../../macros/samples/document-editor/sort-tables.md)（宏）
- [删除空表格](../../macros/samples/document-editor/remove-empty-tables.md)（宏）
- [段落转表格](../../macros/samples/document-editor/paragraphs-to-table.md)（宏）
