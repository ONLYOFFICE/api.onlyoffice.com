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

此示例展示如何获取表示列区域中所有单元格的 ApiRange 对象。

```javascript editor-xlsx
// How to get all column cells.

// Get all column cells from the worksheet.

let worksheet = Api.GetActiveSheet();
let cols = worksheet.GetCols("A1:C1");
cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
