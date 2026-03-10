# SMALL

返回数据集中第 k 个最小值。例如，第五小的数字。

## 语法

```javascript
expression.SMALL(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 将确定第 k 个最小值的数值数据数组或区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要返回的值在区域中的位置（从最小值开始）。 |

## 返回值

number

## 示例

此示例演示如何返回数据集中第 k 个最小值。例如，第五小的数字。

```javascript editor-xlsx
// How to return the k-th smallest value from data set.

// Use a function to get the smallest value from data set indicated.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let range = worksheet.GetRange("A1:A16");
let position = 8;

let func = Api.WorksheetFunction;
let ans = func.SMALL(range, position);

worksheet.GetRange("C1").SetValue(ans);
```
