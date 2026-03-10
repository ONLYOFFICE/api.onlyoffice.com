# GetRows

返回表示行区域中所有单元格的 ApiRange 对象。

## 语法

```javascript
expression.GetRows(value);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string \| number |  | 以字符串或数字格式指定行区域。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例展示如何获取表示行区域中所有单元格的 ApiRange 对象。

```javascript editor-xlsx
// How to get all row cells.

// Get all row cells from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
