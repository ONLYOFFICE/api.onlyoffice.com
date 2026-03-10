# NPV

基于折现率和一系列未来付款（负值）和收入（正值），返回投资的净现值。

## 语法

```javascript
expression.NPV(arg1, args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 贴现率。 |
| args | 必需 | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 255 个表示未来付款（负值）和收入（正值）的参数。第一个参数是必需的，后续值是可选的。参数可以是数字、区域、数字数组。 |

## 返回值

number

## 示例

此示例演示如何根据贴现率和一系列未来付款（负值）和收入（正值）返回投资的净现值。

```javascript editor-xlsx
// How to get the net present value of an investment.

// Use a function to get the net present value of an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Rate");
worksheet.GetRange("A2").SetValue(0.05);
let values = ["Payment", -10000, 3000, 4500, 6000];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("B" + (i + 1)).SetValue(values[i]);
}
let range = worksheet.GetRange("B2:B5");
worksheet.GetRange("B6").SetValue(func.NPV(0.05, range));
```
