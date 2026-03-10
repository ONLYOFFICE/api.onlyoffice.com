# XIRR

返回现金流计划的内部收益率。

## 语法

```javascript
expression.XIRR(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 包含与日期付款计划对应的现金流系列的区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 包含与现金流付款对应的付款日期计划的区域。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 对内部收益率的估计值。如果省略，函数将假定估计值为 0.1（10%）。 |

## 返回值

number

## 示例

此示例演示如何返回现金流计划的内部收益率。

```javascript editor-xlsx
// How to return the internal rate of return.

// Use a function to return the internal rate of return.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];
let dates = ["Dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}
for (let j = 0; j < dates.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(dates[j]);
}

worksheet.GetRange("B1").SetColumnWidth(15);
let range1 = worksheet.GetRange("A2:A5");
let range2 = worksheet.GetRange("B2:B5");
worksheet.GetRange("C5").SetValue(func.XIRR(range1, range2));
```
