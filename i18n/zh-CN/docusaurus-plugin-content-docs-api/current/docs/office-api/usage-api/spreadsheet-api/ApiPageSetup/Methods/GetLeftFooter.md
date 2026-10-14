# GetLeftFooter

返回打印工作表时使用的页脚左侧部分。

## 语法

```javascript
expression.GetLeftFooter();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中工作表的左侧页脚文本并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out what is printed on the left of the footer in a spreadsheet?

// Check the current left footer (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftFooter("&D");
let value = pageSetup.GetLeftFooter();
worksheet.GetRange("A1").SetValue("LeftFooter: " + value);
```
