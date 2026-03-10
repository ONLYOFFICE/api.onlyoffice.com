# STDEVPA

根据整个总体计算标准差，包括逻辑值和文本。
文本和 -**false** 逻辑值的值为 0；-**true** 逻辑值的值为 1。

## 语法

```javascript
expression.STDEVPA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number[] \| number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个将计算标准差的值。第一个参数是必需的，后续参数是可选的。参数可以是数字、逻辑值、文本字符串、名称、区域或数组。 |

## 返回值

number

## 示例

此示例演示如何根据整个总体计算标准差，包括逻辑值和文本。文本和 false 逻辑值的值为 0；true 逻辑值的值为 1。

```javascript editor-xlsx
// How to calculate standard deviation based on the entire population considering logical and text data types.

// Use a function to get the standard deviation.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.STDEVPA(1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12); //includes logical values

worksheet.GetRange("C1").SetValue(ans);
```
