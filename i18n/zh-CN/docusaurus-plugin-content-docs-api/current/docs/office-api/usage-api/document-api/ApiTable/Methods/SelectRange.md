# SelectRange

选择当前表格中的单元格范围。

## 语法

```javascript
expression.SelectRange(startRowIndex, startCellIndex, endRowIndex, endCellIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startRowIndex | 必需 | number |  | 起始行索引。 |
| startCellIndex | 必需 | number |  | 起始行中的起始单元格索引。 |
| endRowIndex | 必需 | number |  | 结束行索引。 |
| endCellIndex | 必需 | number |  | 结束行中的结束单元格索引。 |

## 返回值

boolean

## 示例

在文档中选择表格内的矩形单元格范围。

```javascript editor-docx
// Highlight a block of cells spanning several rows and columns for further editing.

// Select the cells from the first cell of the first row to the second cell of the third row.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.GetCell(0, 0).SetText("Start of the selected range.");
table.GetCell(2, 1).SetText("End of the selected range.");
table.SelectRange(0, 0, 2, 1);
```
