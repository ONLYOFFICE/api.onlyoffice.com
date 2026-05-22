# Merge

将选定的单元格范围合并为单个单元格或单元格行。

## 语法

```javascript
expression.Merge(isAcross);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAcross | 必需 | boolean |  | 当设置为 **true** 时，选定范围内的单元格将沿行合并， |

## 返回值

boolean

## 示例

在电子表格中将一组单元格合并为一个单元格。

```javascript editor-xlsx
// How do I merge multiple cells together into one in a spreadsheet?

// Join adjacent cells across rows or columns into a unified block in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A9:E14").Merge(false);
```
