# GetRange

返回表示当前工作表所选范围的对象。可以是单个单元格 - **A1**，或
单行中的单元格 - **A1:E1**，或单列中的单元格 - **A1:A10**，或多行多列中的单元格 - **A1:E10**。

## 语法

```javascript
expression.GetRange(Range1, Range2);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range1 | 必需 | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | 当前工作表中的单元格范围。 |
| Range2 | 必需 | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | 当前工作表中的单元格范围。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

通过输入地址在电子表格中选择单元格。

```javascript editor-xlsx
// Find and modify a specific block of cells using its coordinates in a spreadsheet?

// Reference any rectangular group to style all cells at once in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");
```
