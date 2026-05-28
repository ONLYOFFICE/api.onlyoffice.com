# GetOperator

返回此列筛选器使用的运算符。

## 语法

```javascript
expression.GetOperator();
```

`expression` - 表示 [ApiFilter](../ApiFilter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlAutoFilterOperator](../../Enumeration/XlAutoFilterOperator.md) \| null

## 示例

读取电子表格中列筛选器使用的比较运算符。

```javascript editor-xlsx
// How do I find out what kind of filtering rule is applied to a column in a spreadsheet?

// Identify the filtering logic behind a column's filter to understand how rows are shown or hidden in a spreadsheet.

let worksheet = Api.GetActiveSheet();

// Prepare data
worksheet.GetRange("A1").SetValue("Amount");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Apply a Top10 items filter
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, "3", "xlTop10Items");

// Get the filter and read its operator
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];

    worksheet.GetRange("C1").SetValue("Filter operator:");
    worksheet.GetRange("D1").SetValue(filter.GetOperator());   // or filter.Operator
}
```
