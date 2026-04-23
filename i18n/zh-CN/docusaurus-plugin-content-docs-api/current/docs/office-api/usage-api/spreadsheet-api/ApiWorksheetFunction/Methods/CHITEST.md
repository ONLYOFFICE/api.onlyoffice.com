# CHITEST

返回独立性检验：根据统计量和适当的自由度从卡方分布得出的值。

## 语法

```javascript
expression.CHITEST(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 包含要与期望值进行比较的观测值的数据区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 包含行总计与列总计乘积与总计之比的数据区域。 |

## 返回值

number

## 示例

此示例演示如何返回独立性检验：统计量的卡方分布值和相应的自由度。

```javascript editor-xlsx
// How to return the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom.

// Use function to return the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let actual1 = ["Actual", 58, 11, 10];
let actual2 = ["Actual", 35, 25, 23];
let expected1 = ["Expected", 45.35, 17.56, 16.09];
let expected2 = ["Expected", 47.65, 18.44, 16.91];

for (let i = 0; i < actual1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(actual1[i]);
}
for (let j = 0; j < actual2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(actual2[j]);
}
for (let n = 0; n < expected1.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(expected1[n]);
}
for (let m = 0; m < expected2.length; m++) {
    worksheet.GetRange("D" + (m + 1)).SetValue(expected2[m]);
}

let range1 = worksheet.GetRange("A2:B4");
let range2 = worksheet.GetRange("C2:D4");
worksheet.GetRange("D6").SetValue(func.CHITEST(range1, range2));
```
