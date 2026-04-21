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

获取电子表格中范围的命名范围对象。

```javascript editor-xlsx
// How to find out a range name in a spreadsheet.

// Get a range, get its name and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let range = worksheet.GetRange("A1:B1");
let defName = range.GetDefName();
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
