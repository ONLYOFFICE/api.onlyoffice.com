# STANDARDIZE

从以平均值和标准偏差为特征的分布中返回标准化值。

## 语法

```javascript
expression.STANDARDIZE(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要标准化的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的算术平均值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的标准差，一个正数。 |

## 返回值

number

## 示例

从具有均值和标准差的分布计算标准化值。

```javascript editor-xlsx
// The STANDARDIZE function converts a value to a z-score using the distribution's mean and standard deviation.

// Get the normalized value and place it in cell C1.

const worksheet = Api.GetActiveSheet();

let valueArr = [5, -2, 10];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let x = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let stdDev = worksheet.GetRange("A3");

let func = Api.WorksheetFunction;
let ans = func.STANDARDIZE(x, mean, stdDev);

worksheet.GetRange("C1").SetValue(ans);
```
