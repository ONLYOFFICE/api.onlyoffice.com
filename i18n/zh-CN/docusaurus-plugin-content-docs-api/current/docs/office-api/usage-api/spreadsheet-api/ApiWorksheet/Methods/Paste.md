# Paste

将剪贴板的内容粘贴到当前工作表。

## 语法

```javascript
expression.Paste(destination);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| destination | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 应粘贴剪贴板内容的单元格区域。如果省略此参数，则使用当前选择。 |

## 返回值

此方法不返回任何数据。

## 示例

将剪贴板内容粘贴到电子表格中的活动工作表。

```javascript editor-xlsx
// How do I paste copied or cut data from the clipboard in a spreadsheet?

// Insert clipboard data into the current worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.Paste();
```
