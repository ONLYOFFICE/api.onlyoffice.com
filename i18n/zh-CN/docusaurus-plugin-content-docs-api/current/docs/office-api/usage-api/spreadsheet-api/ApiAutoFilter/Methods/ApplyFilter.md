# ApplyFilter

使用现有筛选条件将自动筛选重新应用于工作表。

此方法对应于 Excel AutoFilter.ApplyFilter 行为：
它不更改当前定义的筛选条件；只根据活动筛选器
重新计算哪些行应该可见。
如果工作表未定义自动筛选，该方法不执行任何操作。

## 语法

```javascript
expression.ApplyFilter();
```

`expression` - 表示 [ApiAutoFilter](../ApiAutoFilter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

void

## 示例

This example reapplies an existing AutoFilter after the data changes.

```javascript editor-xlsx
// How to reuse filter criteria without redefining them.

// Reapply an AutoFilter using ApiAutoFilter.ApplyFilter().

let worksheet = Api.GetActiveSheet();

// Prepare sample data
worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Apply an AutoFilter that shows values greater than 25
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(null);
dataRange.SetAutoFilter(1, ">25", "xlOr");

// Change one value so that the filter result would be different
worksheet.GetRange("A7").SetValue(22);

// Reapply the existing filter criteria on the worksheet
let autoFilter = worksheet.AutoFilter;
autoFilter.ApplyFilter();

// Explain in the sheet what we did
worksheet.GetRange("C1").SetValue("AutoFilter reapplied with ApplyFilter().");
worksheet.GetRange("C2").SetValue("Filter: Score > 25");
worksheet.GetRange("C7").SetValue("Updated value in A3 is now included by the filter.");

```
