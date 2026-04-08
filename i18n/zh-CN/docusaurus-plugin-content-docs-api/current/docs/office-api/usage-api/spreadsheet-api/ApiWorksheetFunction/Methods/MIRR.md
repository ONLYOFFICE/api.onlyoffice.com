# MIRR

返回一系列定期现金流的内部收益率，同时考虑投资成本和现金再投资的利息。

## 语法

```javascript
expression.MIRR(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 包含表示定期付款（负值）和收入（正值）系列的数字的单元格区域或数组。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 现金流中使用的资金支付的利率。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 现金再投资收到的利率。 |

## 返回值

number

## 示例

此示例演示如何返回一系列定期现金流的内部收益率，同时考虑投资成本和现金再投资的利息。

```javascript editor-xlsx
// How to get the internal rate of return for a series of periodic cash flows.

// Use a function to calculate the internal rate of return.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

worksheet.GetRange("B1").SetValue("Paid interest rate");
worksheet.GetRange("B2").SetValue(0.2);
worksheet.GetRange("C1").SetValue("Received interest rate");
worksheet.GetRange("C2").SetValue(0.23);

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.MIRR(range, 0.2, 0.23));
```
