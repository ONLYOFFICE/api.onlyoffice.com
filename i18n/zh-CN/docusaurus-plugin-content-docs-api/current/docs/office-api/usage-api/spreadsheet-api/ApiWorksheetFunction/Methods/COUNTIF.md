# COUNTIF

统计范围内满足给定条件的单元格数量。

## 语法

```javascript
expression.COUNTIF(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 用于计数非空单元格的单元格区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 以数字、表达式或文本形式定义将被计数的单元格的条件。 |

## 返回值

number

## 示例

此示例演示如何计算区域内满足给定条件的单元格数量。

```javascript editor-xlsx
// How to find a number of cells that satisfies some condition.

// Use function to get cells if a condition is met.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let fruits = ["Apples", "ranges", "Bananas"];
let numbers = [45, 6, 8];

for (let i = 0; i < fruits.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(fruits[i]);
}
for (let j = 0; j < numbers.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("D3").SetValue(func.COUNTIF(range, "*es"));
```
