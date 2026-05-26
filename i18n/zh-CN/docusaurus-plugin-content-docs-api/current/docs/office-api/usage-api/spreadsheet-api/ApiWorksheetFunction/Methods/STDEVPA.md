# STDEVPA

Calculates standard deviation based on the entire population, including logical values and text.
Text and the - **false** logical value have the value 0; the - **true** logical value has the value 1.

## 语法

```javascript
expression.STDEVPA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number[] \| number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个值，将计算这些值的标准偏差。 |

## 返回值

number

## 示例

计算包含逻辑值和文本的总体的标准差。

```javascript editor-xlsx
// The STDEVPA function treats text as 0 and logical values as 0 (false) or 1 (true) in population calculations.

// Get the population standard deviation including logical and text values, and place it in cell C1.

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
