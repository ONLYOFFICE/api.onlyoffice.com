# GetPrintGridlines

返回页面 PrintGridlines 属性，该属性指定是否必须打印当前工作表网格线。

## 语法

```javascript
expression.GetPrintGridlines();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何获取页面 PrintGridlines 属性，该属性指定是否必须打印工作表网格线。

```javascript editor-xlsx
// How to find out whether sheet gridlines should be printed or not.

// Get a boolean value representing whether to print gridlines or not.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());

```
