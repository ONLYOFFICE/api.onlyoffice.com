# SetPrintArea

设置要打印的范围（打印区域）。传递空字符串可清除打印区域并打印整个工作表。

## 语法

```javascript
expression.SetPrintArea(sRange);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | 必需 | string |  | 范围地址（例如，"A1:D20"）；多个区域以逗号分隔。为空时清除打印区域。 |

## 返回值

boolean

## 示例

在电子表格中将打印限制在工作表的特定范围（打印区域）内。

```javascript editor-xlsx
// How do I print only a selected range instead of the whole sheet in a spreadsheet?

// Define which cells get printed by setting the print area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintArea("A1:D20");
```
