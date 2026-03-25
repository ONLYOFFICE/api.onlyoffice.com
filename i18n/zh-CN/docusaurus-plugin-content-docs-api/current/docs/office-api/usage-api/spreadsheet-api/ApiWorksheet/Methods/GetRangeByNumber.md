# GetRangeByNumber

返回使用 -**行/列** 坐标进行单元格选择的当前工作表选定区域的对象。

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

此示例展示如何使用行/列坐标获取表示工作表选定区域的对象进行单元格选择。

```javascript editor-xlsx
// How to get a range using its coordinates.

// Get range by number and set its value.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");
```
