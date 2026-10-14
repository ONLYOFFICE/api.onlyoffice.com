# GetZoom

返回打印工作表时使用的缩放比例（以百分比表示）。

## 语法

```javascript
expression.GetZoom();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中工作表的打印缩放比例（缩放）。

```javascript editor-xlsx
// How do I find out the print scaling percentage before printing in a spreadsheet?

// Check the current print zoom level of a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetZoom(80);
let zoom = pageSetup.GetZoom();
worksheet.GetRange("A1").SetValue("Print zoom: " + zoom + "%");
```
