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

同时选择多行以在电子表格中一次性设置其样式。

```javascript editor-xlsx
// Work with a group of rows when you want to apply one change everywhere in a spreadsheet?

// Color a row range uniformly by treating it as a single collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
