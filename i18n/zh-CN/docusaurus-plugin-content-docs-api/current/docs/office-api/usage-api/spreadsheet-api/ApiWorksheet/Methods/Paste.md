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

此示例展示如何从剪贴板粘贴数据。

```javascript editor-xlsx
// How to paste a copied or cut data from the clipboard.

// Paste to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.Paste();
```
