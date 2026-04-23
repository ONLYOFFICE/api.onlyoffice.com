# FormatAsTable

将当前工作表中选定的单元格区域格式化为表格（第一行格式化为标题）。
💡 由于第一行始终格式化为表格标题，因此您需要至少选择两行才能正确形成表格。

## 语法

```javascript
expression.FormatAsTable(sRange);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 当前工作表中将被格式化为表格的单元格区域。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将工作表中选定的单元格区域格式化为表格。

```javascript editor-xlsx
// How to format a range as a table.

// Select a range and format it as a table.

let worksheet = Api.GetActiveSheet();
worksheet.FormatAsTable("A1:E10");

```
