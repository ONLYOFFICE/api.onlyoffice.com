# GetFilterMode

返回一个值，指示工作表是否已应用自动筛选。

## 语法

```javascript
expression.GetFilterMode();
```

`expression` - 表示 [ApiAutoFilter](../ApiAutoFilter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example checks whether a worksheet currently has an AutoFilter.

```javascript editor-xlsx
// How to detect if filtering is active on a sheet.

// Use ApiAutoFilter.GetFilterMode() to test filter state.

let worksheet = Api.GetActiveSheet();

// Initially: no AutoFilter
let autoFilter = worksheet.AutoFilter;

worksheet.GetRange("C1").SetValue("FilterMode before SetAutoFilter:");
worksheet.GetRange("C2").SetValue(autoFilter.FilterMode);

// Add data and apply an AutoFilter
worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(1);
worksheet.GetRange("A3").SetValue(2);
worksheet.GetRange("A4").SetValue(3);
worksheet.GetRange("A5").SetValue(4);

let dataRange = worksheet.GetRange("A1:A5");
dataRange.SetAutoFilter(1, ">2", "xlOr");

// Reacquire the AutoFilter and check FilterMode again
autoFilter = worksheet.AutoFilter;

worksheet.GetRange("C4").SetValue("FilterMode after SetAutoFilter:");
worksheet.GetRange("C5").SetValue(autoFilter.GetFilterMode());

```
