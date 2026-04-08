# QUARTILE

返回数据集的四分位数。

## 语法

```javascript
expression.QUARTILE(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 将返回四分位数值的数值数组或单元格区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要返回的四分位数值：最小值 = 0；第 1 四分位数 = 1；中位数 = 2；第 3 四分位数 = 3；最大值 = 4。 |

## 返回值

number

## 示例

此示例演示如何返回数据集的四分位数。

```javascript editor-xlsx
// How to get the quartile of a data set.

// Use a function to calculate a part divided by four of a data set.

const worksheet = Api.GetActiveSheet();

let valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let quart = 3; //eg: third quartile (75th percentile)

// Place the numbers in cells
for (let i = 0; i < valueArr1.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
let array = worksheet.GetRange("A1:A12");

let func = Api.WorksheetFunction;
let ans = func.QUARTILE(array, quart);

worksheet.GetRange("C1").SetValue(ans);
```
