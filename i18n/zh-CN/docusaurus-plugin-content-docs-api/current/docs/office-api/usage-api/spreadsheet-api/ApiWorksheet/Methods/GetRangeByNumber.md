# GetRangeByNumber

使用 **行/列** 坐标返回表示当前工作表所选范围的对象。

## 语法

```javascript
expression.GetRangeByNumber(nRow, nCol);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | 必需 | number |  | 行号。 |
| nCol | 必需 | number |  | 列号。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

使用行号和列号而非字母在电子表格中定位单元格。

```javascript editor-xlsx
// Pick cells by their numeric positions without using address notation in a spreadsheet?

// Enter data into a cell when you know only its row and column count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");
```
