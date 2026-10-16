# SetPaperSize

设置打印工作表时使用的纸张大小。

## 语法

```javascript
expression.SetPaperSize(sPaperSize);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPaperSize | 必需 | [PaperSize](../../Enumeration/PaperSize.md) |  | 纸张大小（xlPaperSize 常量名称，例如，"xlPaperA4"）。 |

## 返回值

boolean

## 示例

设置电子表格中打印工作表时使用的纸张大小。

```javascript editor-xlsx
// How do I switch the print paper size to A4 (or Letter, A3, ...) in a spreadsheet?

// Choose the paper format for printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
```
