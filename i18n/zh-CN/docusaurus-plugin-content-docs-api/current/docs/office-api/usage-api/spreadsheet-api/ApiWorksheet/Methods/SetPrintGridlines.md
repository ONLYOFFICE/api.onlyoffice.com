# SetPrintGridlines

指定是否必须打印当前工作表网格线。

## 语法

```javascript
expression.SetPrintGridlines(bPrint);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | 必需 | boolean |  | 定义是否在此页面上打印单元格网格线。 |

## 返回值

boolean

## 示例

在电子表格中启用或禁用打印页面上的网格线。

```javascript editor-xlsx
// How do I include or exclude the grid pattern when printing my spreadsheet?

// Specify whether printed output shows the cell boundary lines in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());
```
