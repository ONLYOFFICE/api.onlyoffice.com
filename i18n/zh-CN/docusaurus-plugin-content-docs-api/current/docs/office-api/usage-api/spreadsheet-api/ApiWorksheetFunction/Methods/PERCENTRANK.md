# PERCENTRANK

返回值在数据集中的排名，以数据集的百分比表示。

## 语法

```javascript
expression.PERCENTRANK(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 定义相对位置的具有数值的数据数组或区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其排名的值。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 可选值，用于标识返回百分比的有效数字位数，如果省略则为三位数字 (0.xxx%)。 |

## 返回值

number

## 示例

此示例演示如何将数据集中值的排名作为数据集的百分比返回。

```javascript editor-xlsx
// How to return the rank of a value in a data set as a percentage.

// Use a function to get a rank of a value in a data set.

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
worksheet.GetRange("D5").SetValue(func.PERCENTRANK(range, 2, 4));
```
