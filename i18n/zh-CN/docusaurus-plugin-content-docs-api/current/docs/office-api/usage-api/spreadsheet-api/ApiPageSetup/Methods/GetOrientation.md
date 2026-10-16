# GetOrientation

返回打印工作表时使用的页面方向。

## 语法

```javascript
expression.GetOrientation();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PageOrientation](../../Enumeration/PageOrientation.md)

## 示例

读取打印电子表格时使用的页面方向。

```javascript editor-xlsx
// How do I find out if a worksheet prints in portrait or landscape in a spreadsheet?

// Check the current page orientation before printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOrientation("xlLandscape");
let orientation = pageSetup.GetOrientation();
worksheet.GetRange("A1").SetValue("Orientation: " + orientation);
```
