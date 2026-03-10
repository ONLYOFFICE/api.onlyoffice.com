# GetCells

返回表示工作表上所有单元格的 ApiRange（不仅限于当前正在使用的单元格）。

## 语法

```javascript
expression.GetCells(row, col);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| row | 必需 | number |  | 行号或单元格编号（如果仅定义了行）。 |
| col | 必需 | number |  | 列号。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例展示如何获取表示工作表上所有单元格的 ApiRange。

```javascript editor-xlsx
// How to get all cells.

// Get all cells from the worksheet.

let worksheet = Api.GetActiveSheet();
let cells = worksheet.GetCells();
cells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
