# STDEVP

基于作为参数给出的整体总体计算标准偏差（忽略逻辑值和文本）。

## 语法

```javascript
expression.STDEVP(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number[] \| number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | 最多 255 个将计算标准差的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何根据作为参数给出的整个总体计算标准差（忽略逻辑值和文本）。

```javascript editor-xlsx
// How to calculate standard deviation based on the entire population.

// Use a function to get the standard deviation.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.STDEVP(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12); 

worksheet.GetRange("C1").SetValue(ans);
```
