# SetPrintHeadings

指定是否必须打印当前工作表的行/列标题。

## 语法

```javascript
expression.SetPrintHeadings(bPrint);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | 必需 | boolean |  | 指定是否必须打印当前工作表的行/列标题。 |

## 返回值

boolean

## 示例

在电子表格的打印输出中添加行号和列字母。

```javascript editor-xlsx
// How do I include row and column identifiers on my printed pages in a spreadsheet?

// Display the grid labels (A, B, C and 1, 2, 3) when printing your spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());
```
