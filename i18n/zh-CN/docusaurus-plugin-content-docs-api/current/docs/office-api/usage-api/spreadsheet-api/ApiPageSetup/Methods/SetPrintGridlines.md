# SetPrintGridlines

设置是否随工作表一起打印单元格网格线。

## 语法

```javascript
expression.SetPrintGridlines(bPrint);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | 必需 | boolean |  | 指定是否打印单元格网格线。 |

## 返回值

boolean

## 示例

在电子表格中随工作表内容一起打印单元格网格线。

```javascript editor-xlsx
// How do I make gridlines appear on the printout in a spreadsheet?

// Show the cell gridlines when printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintGridlines(true);
```
