# SetFontSize

设置当前单元格范围中字符的字体大小。

## 语法

```javascript
expression.SetFontSize(nSize);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | 必需 | number |  | 以磅为单位的字体大小值。 |

## 返回值

boolean

## 示例

更改电子表格中单元格范围内文本的字体大小。

```javascript editor-xlsx
// How do I make text larger or smaller in a group of cells in a spreadsheet?

// Adjust the point size of characters across a range to improve readability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontSize(20);
```
