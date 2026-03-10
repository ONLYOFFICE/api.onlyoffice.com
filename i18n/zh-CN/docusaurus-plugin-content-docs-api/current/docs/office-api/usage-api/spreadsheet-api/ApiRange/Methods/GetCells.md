# GetCells

返回表示指定范围中所有单元格或指定单元格的 Range 对象。

## 语法

```javascript
expression.GetCells(row, col);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| row | 必需 | number |  | 行号或单元格编号（如果仅定义了行）。 |
| col | 必需 | number |  | 列号。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例演示如何获取表示指定范围中所有单元格或指定单元格的 Range 对象。

```javascript editor-xlsx
// How to get range cells.

// Get range cells, fill them with a color and display the result in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

```
