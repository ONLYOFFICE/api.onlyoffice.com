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

选择幻灯片上表格中的矩形单元格范围。

```javascript editor-pptx
// Highlight a block of cells spanning several rows and columns to apply changes to them.

// Select the cells from the first cell of the first row to the second cell of the second row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
slide.AddObject(table);
table.SelectRange(0, 0, 1, 1);
const selectedCells = table.GetSelectedCells();
selectedCells.forEach(function(cell){
    cell.SetBackgroundColor(Api.RGB(150, 0, 0))
})
```
