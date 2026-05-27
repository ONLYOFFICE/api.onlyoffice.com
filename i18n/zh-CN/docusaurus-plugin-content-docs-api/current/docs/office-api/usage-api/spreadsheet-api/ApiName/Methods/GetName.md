# GetName

返回 ApiName 类的类型。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中分配给命名范围的标签。

```javascript editor-xlsx
// How do I find out what a named range is called in a spreadsheet?

// Retrieve the text name of a range to display or compare it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("numbers");
worksheet.GetRange("A3").SetValue("Name: " + defName.GetName());
```
