# IRR

返回一系列现金流的内部收益率。

## 语法

```javascript
expression.IRR(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number[] \| [ApiRange](../../ApiRange/ApiRange.md) |  | 包含将计算内部收益率的数字的单元格区域或数组。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 对内部收益率的估计值。如果省略，函数将假定估计值为 0.1（10%）。 |

## 返回值

number

## 示例

此示例演示如何返回一系列现金流的内部收益率。

```javascript editor-xlsx
// How to calculate the internal rate of the return for a series of cash flows.

// Use a function to get the internal rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.IRR(range));
```
