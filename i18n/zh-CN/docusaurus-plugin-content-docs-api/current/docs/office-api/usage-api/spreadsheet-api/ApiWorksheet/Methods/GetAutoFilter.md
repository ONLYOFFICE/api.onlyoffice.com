# GetAutoFilter

返回表示工作表自动筛选的 ApiAutoFilter 对象实例。

## 语法

```javascript
expression.GetAutoFilter();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiAutoFilter](../../ApiAutoFilter/ApiAutoFilter.md)

## 示例

此示例获取工作表的自动筛选对象。

```javascript editor-xlsx
// How to get the AutoFilter object of a worksheet.

// Get the AutoFilter object.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Cherry");
let range = worksheet.GetRange("A1:A4");
range.SetAutoFilter();
let autoFilter = worksheet.GetAutoFilter();
let filterRange = autoFilter.GetRange();
worksheet.GetRange("C1").SetValue("AutoFilter range:");
worksheet.GetRange("C2").SetValue(filterRange.GetAddress());

```
