# GetCount

返回表示集合中对象数量的值。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiAreas](../ApiAreas.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算构成电子表格中多区域选区的独立范围数量。

```javascript editor-xlsx
// How do I find the total number of distinct ranges within a multi-area selection in a spreadsheet?

// Determine the size of an areas collection to loop over each range individually in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange('A5');
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(count);
```
