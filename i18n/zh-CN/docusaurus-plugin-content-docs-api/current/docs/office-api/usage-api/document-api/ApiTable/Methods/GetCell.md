# GetCell

通过位置返回单元格。

## 语法

```javascript
expression.GetCell(rowIndex, cellIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowIndex | 必需 | number |  | 当前表格中的行索引。 |
| cellIndex | 必需 | number |  | 指定行中的单元格索引。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

通过行和列位置访问文档中的特定单元格。

```javascript editor-docx
// How do I retrieve a particular cell from a table in a document?

// Target an individual cell using its coordinates to write content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.GetContent().GetElement(0).AddText("Cell #1");
```
