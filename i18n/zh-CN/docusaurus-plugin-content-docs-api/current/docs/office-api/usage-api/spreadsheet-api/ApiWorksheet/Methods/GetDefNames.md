# GetDefNames

返回 ApiName 对象数组。

## 语法

```javascript
expression.GetDefNames();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiName](../../ApiName/ApiName.md)[]

## 示例

收集电子表格中活动工作表上定义的所有命名范围。

```javascript editor-xlsx
// How do I list every named range on a worksheet in a spreadsheet?

// Loop through all named ranges and display their names in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("A2").SetValue("A");
worksheet.GetRange("B2").SetValue("B");
worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.AddDefName("letters", "Sheet1!$A$2:$B$2");
let defNames = worksheet.GetDefNames();
worksheet.GetRange("A4").SetValue("DefNames: " + defNames[0].GetName() + ", " + defNames[1].GetName());
```
