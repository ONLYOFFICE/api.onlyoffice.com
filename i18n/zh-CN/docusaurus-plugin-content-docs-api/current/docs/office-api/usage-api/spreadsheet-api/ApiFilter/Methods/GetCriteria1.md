# GetCriteria1

返回此列筛选器关联的第一个条件。

## 语法

```javascript
expression.GetCriteria1();
```

`expression` - 表示 [ApiFilter](../ApiFilter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| string[] \| number \| [XlDynamicFilterCriteria](../../Enumeration/XlDynamicFilterCriteria.md) \| null

## 示例

此示例读取筛选的第一个条件。

```javascript editor-xlsx
// How to inspect the main condition of an AutoFilter column.

// Use ApiFilter.GetCriteria1() to get the first filter criterion.

let worksheet = Api.GetActiveSheet();

// Prepare numeric data
worksheet.GetRange("A1").SetValue("Value");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Create a custom filter with two criteria (xlOr)
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">20", "xlOr", "<=30");

// Get the first filter object
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];
    let criteria1 = filter.GetCriteria1();  // or filter.Criteria1

    worksheet.GetRange("C1").SetValue("Criteria1 (first condition):");
    worksheet.GetRange("D1").SetValue(criteria1);
}

```
