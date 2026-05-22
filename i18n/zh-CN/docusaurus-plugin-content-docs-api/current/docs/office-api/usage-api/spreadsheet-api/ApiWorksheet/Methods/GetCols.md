# GetCols

返回表示列区域中所有单元格的 ApiRange 对象。

## 语法

```javascript
expression.GetCols(sRange);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 以字符串格式指定列区域。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

在电子表格工作表上选择指定列范围内的所有单元格。

```javascript editor-xlsx
// How do I target every cell in a set of columns in a spreadsheet?

// Apply formatting to a group of columns by referencing all their cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let cols = worksheet.GetCols("A1:C1");
cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
