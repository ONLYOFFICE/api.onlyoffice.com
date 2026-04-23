# SKEW

返回分布的偏度：分布围绕其平均值的不对称程度的特征。

## 语法

```javascript
expression.SKEW(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| [ApiName](../../ApiName/ApiName.md) \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) |  | 最多 255 个数值，将返回其分布的偏度。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回分布的偏度：描述分布围绕其平均值的不对称程度。

```javascript editor-xlsx
// How to calaculate the skewness of a distribution.

// Use a function to get a characterization of the degree of asymmetry of a distribution around its mean.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.SKEW(1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12);

worksheet.GetRange("C1").SetValue(ans);

```
