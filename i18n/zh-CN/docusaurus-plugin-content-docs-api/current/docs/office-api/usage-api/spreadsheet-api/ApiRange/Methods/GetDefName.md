# GetDefName

返回当前范围的 ApiName 对象。

## 语法

```javascript
expression.GetDefName();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiName](../../ApiName/ApiName.md)

## 示例

查找分配给电子表格中单元格范围的定义名称。

```javascript editor-xlsx
// How do I find out what name has been given to a range in a spreadsheet?

// Print the assigned name of a range into another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let range = worksheet.GetRange("A1:B1");
let defName = range.GetDefName();
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
