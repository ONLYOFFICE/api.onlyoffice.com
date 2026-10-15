# GetCenterHeader

返回打印工作表时使用的页眉中间部分。

## 语法

```javascript
expression.GetCenterHeader();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中工作表的页眉中间文本并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out what is printed on the center of the header in a spreadsheet?

// Check the current center header (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHeader("&A");
let value = pageSetup.GetCenterHeader();
worksheet.GetRange("A1").SetValue("CenterHeader: " + value);
```
