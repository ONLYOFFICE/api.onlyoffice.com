# PERCENTILE_INC

返回范围内值的第 k 个百分位数，其中 k 在 0..1 范围内，包含端点。

## 语法

```javascript
expression.PERCENTILE_INC(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 定义相对位置的数据数组或区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 百分位值，大于或等于 0 且小于或等于 1。 |

## 返回值

number

## 示例

此示例演示如何返回区域中值的第 k 个百分位数，其中 k 在 0 到 1 的范围内（含端点）。

```javascript editor-xlsx
// How to get the k-th percentile of values in a range (inclusive).

// Use a function to get the k-th percentile of values.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let column1 = [1, 0, 7, 10];
let column2 = [3, 2, 5, 8];
let column3 = [5, 4, 3, 6];
let column4 = [7, 6, 5, 4];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}
for (let n = 0; n < column3.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(column3[n]);
}
for (let m = 0; m < column4.length; m++) {
    worksheet.GetRange("D" + (m + 1)).SetValue(column4[m]);
}

let range = worksheet.GetRange("A1:D4");
worksheet.GetRange("D5").SetValue(func.PERCENTILE_INC(range, 1));
```
