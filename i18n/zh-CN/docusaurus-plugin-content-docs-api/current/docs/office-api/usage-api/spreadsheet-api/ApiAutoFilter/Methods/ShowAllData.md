# ShowAllData

清除所有筛选器并显示自动筛选区域中的所有行。

此方法对应于 Excel AutoFilter.ShowAllData 行为：
它从工作表中删除任何活动筛选，同时保留
标题行上的自动筛选下拉列表。如果工作表
未定义自动筛选，该方法不执行任何操作。

## 语法

```javascript
expression.ShowAllData();
```

`expression` - 表示 [ApiAutoFilter](../ApiAutoFilter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

void

## 示例

移除当前筛选条件使电子表格中的每一行都变为可见。

```javascript editor-xlsx
// How do I unhide all filtered-out rows without removing the filter drop-downs in a spreadsheet?

// Reveal all hidden rows while leaving the filter controls on the header intact in a spreadsheet.

let worksheet = Api.GetActiveSheet();

// Prepare sample data
worksheet.GetRange("A1").SetValue("Amount");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(40);

// Apply an AutoFilter that hides small values
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">100", "xlOr");

let autoFilter = worksheet.AutoFilter;
worksheet.GetRange("C1").SetValue("FilterMode before ShowAllData:");
worksheet.GetRange("C2").SetValue(autoFilter.FilterMode);

// Now show all data (rows become visible, filter drop-down stays)
autoFilter.ShowAllData();

worksheet.GetRange("C4").SetValue("ShowAllData() called.");
worksheet.GetRange("C5").SetValue("Filter drop-down remains on header.");
worksheet.GetRange("C6").SetValue("All rows in the AutoFilter range are visible.");
```
