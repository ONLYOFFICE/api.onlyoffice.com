# STDEV_S

基于样本估算标准偏差（忽略样本中的逻辑值和文本）。

## 语法

```javascript
expression.STDEV_S(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number[] \| number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | 最多 255 个数值，用于计算标准偏差。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

估计样本的标准差。

```javascript editor-xlsx
// The STDEV_S function calculates sample standard deviation while ignoring logical values and text.

// Get the standard deviation of the sample values and place it in cell C1.

const worksheet = Api.GetActiveSheet();

let valueArr = [3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.STDEV_S(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14); //ignores logical values and text

worksheet.GetRange("C1").SetValue(ans);
```
