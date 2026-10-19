# GetScaleWithDocHeaderFooter

返回在为打印而缩放文档时页眉和页脚是否随文档一起缩放。

## 语法

```javascript
expression.GetScaleWithDocHeaderFooter();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查打印时页眉和页脚是否随文档一起缩放。

```javascript editor-xlsx
// How do I find out if the header/footer scales with the print scaling in a spreadsheet?

// Read the scale-with-document header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetScaleWithDocHeaderFooter(true);
let value = pageSetup.GetScaleWithDocHeaderFooter();
worksheet.GetRange("A1").SetValue("Scale header/footer with document: " + value);
```
