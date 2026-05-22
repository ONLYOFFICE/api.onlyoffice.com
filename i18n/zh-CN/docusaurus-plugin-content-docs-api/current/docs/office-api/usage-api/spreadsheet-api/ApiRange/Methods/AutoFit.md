# AutoFit

更改范围内列的宽度或行的高度以实现最佳适应。

## 语法

```javascript
expression.AutoFit(bRows, bCols);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRows | 可选 | boolean |  | 指定列宽是否自动适应。 |
| bCols | 可选 | boolean |  | 指定行高是否自动适应。 |

## 返回值

此方法不返回任何数据。

## 示例

调整电子表格中范围内列或行的大小，使所有内容完全显示而不被截断。

```javascript editor-xlsx
// How do I automatically adjust column width or row height to fit the text in a spreadsheet?

// Prevent truncated text by letting the spreadsheet size each column and row to match its content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is an example of the column width autofit.");
range.AutoFit(false, true);
```
