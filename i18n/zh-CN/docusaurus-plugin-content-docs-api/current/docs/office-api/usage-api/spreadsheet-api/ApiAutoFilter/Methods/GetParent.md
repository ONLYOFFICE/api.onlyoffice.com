# GetParent

返回自动筛选的父 ApiWorksheet 对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiAutoFilter](../ApiAutoFilter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

从电子表格中的筛选对象内访问包含活动筛选器的工作表。

```javascript editor-xlsx
// How do I get back to the sheet itself when I only have a filter reference in a spreadsheet?

// Navigate from the filter back to the worksheet so you can work with other cells on the same sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();

// Create a simple AutoFilter
worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("A3").SetValue("Bob");
worksheet.GetRange("A4").SetValue("Charlie");

let range = worksheet.GetRange("A1:A4");
range.SetAutoFilter();

// Get the AutoFilter and its parent worksheet
let autoFilter = worksheet.AutoFilter;
let parentSheet = autoFilter.GetParent();   // or autoFilter.Parent

worksheet.GetRange("C1").SetValue("Parent worksheet name:");
worksheet.GetRange("C2").SetValue(parentSheet.GetName());

worksheet.GetRange("C4").SetValue("AutoFilter is attached to this worksheet.");
```
