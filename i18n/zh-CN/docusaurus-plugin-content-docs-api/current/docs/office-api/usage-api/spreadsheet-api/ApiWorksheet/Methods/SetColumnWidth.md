# SetColumnWidth

设置指定列的宽度。
一个列宽单位等于正常样式中一个字符的宽度。
对于比例字体，使用字符 0（零）的宽度。

## 语法

```javascript
expression.SetColumnWidth(nColumn, nWidth, bWithotPaddings);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nColumn | 必需 | number |  | 要设置宽度的列号。 |
| nWidth | 必需 | number |  | 列宽除以 7 像素。 |
| bWithotPaddings | 可选 | boolean | false | 指定是否不使用标准填充来设置 nWidth。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置指定列的宽度。

```javascript editor-xlsx
// How to set a column width.

// Resize column width.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 10);
worksheet.SetColumnWidth(1, 20);

```
