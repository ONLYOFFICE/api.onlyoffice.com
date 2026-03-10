# XNPV

返回现金流计划的净现值。

## 语法

```javascript
expression.XNPV(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 应用于现金流的贴现率。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 包含与日期付款计划对应的现金流系列的区域。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 包含与现金流付款对应的付款日期计划的区域。 |

## 返回值

number

## 示例

此示例演示如何返回现金流计划的净现值。

```javascript editor-xlsx
// How to return the net present value for a schedule of cash flows.

// Use a function to return the net present value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);

let payment = ["Payment/Income", -10000, 500, 5000, 3000];
let dates = ["Payment dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (let i = 0; i < payment.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(payment[i]);
}
for (let j = 0; j < dates.length; j++) {
    worksheet.GetRange("C" + (j + 1)).SetValue(dates[j]);
}

worksheet.GetRange("C1").SetColumnWidth(15);
let range1 = worksheet.GetRange("B2:B5");
let range2 = worksheet.GetRange("C2:C5");
worksheet.GetRange("D5").SetValue(func.XNPV(0.05, range1, range2));
```
