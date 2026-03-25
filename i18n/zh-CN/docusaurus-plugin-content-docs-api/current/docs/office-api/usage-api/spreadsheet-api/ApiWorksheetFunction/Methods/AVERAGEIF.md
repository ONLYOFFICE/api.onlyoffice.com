# AVERAGEIF

查找满足给定条件或标准的单元格的平均值（算术平均值）。

## 语法

```javascript
expression.AVERAGEIF(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 将被计算的单元格区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 以数字、表达式或文本形式定义将用于计算平均值的单元格的条件或标准。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 用于计算平均值的实际单元格。如果省略，则使用区域中的单元格。 |

## 返回值

number

## 示例

此示例演示如何计算由给定条件或标准指定的单元格的平均值（算术平均数）。

```javascript editor-xlsx
// How to find an average (arithmetic mean) using condition.

// Use function to get an average of the cells if the condition is met.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let numbers = [67, 87, 98, 45];

for (let i = 0; i < numbers.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbers[i]);
}

let range = worksheet.GetRange("A1:A4");
worksheet.GetRange("C1").SetValue(func.AVERAGEIF(range, ">45"));
```
