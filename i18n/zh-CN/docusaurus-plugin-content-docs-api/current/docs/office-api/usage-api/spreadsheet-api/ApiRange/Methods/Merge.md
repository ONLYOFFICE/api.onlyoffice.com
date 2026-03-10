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
| isAcross | 必需 | boolean |  | 当设置为 **true** 时，所选范围内的单元格将沿行合并，但在列中保持拆分。当设置为 **false** 时，整个选定的单元格范围将合并为单个单元格。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将选定的单元格范围合并为单个单元格或单元格行。

```javascript editor-xlsx
// How to get a range using cell addresses and merge them into one.

// Get a range, merge its cells into one cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A9:E14").Merge(false);
```
