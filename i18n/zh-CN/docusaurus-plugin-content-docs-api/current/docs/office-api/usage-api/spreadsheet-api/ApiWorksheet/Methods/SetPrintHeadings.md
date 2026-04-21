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

此方法不返回任何数据。

## 示例

指定电子表格中当前工作表的行/列标题是否必须打印。

```javascript editor-xlsx
// How to set whether sheet headings should be printed or not in a spreadsheet.

// Set a boolean value representing whether to print row/column headings or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());
```
