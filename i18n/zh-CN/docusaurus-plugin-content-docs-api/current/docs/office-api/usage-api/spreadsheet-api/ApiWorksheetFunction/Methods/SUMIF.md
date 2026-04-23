# SUMIF

将满足给定条件或标准的单元格相加。

## 语法

```javascript
expression.SUMIF(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要计算的单元格区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 以数字、表达式或文本形式定义将被相加的单元格的条件或标准。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要求和的区域。如果省略，则使用区域中的单元格。 |

## 返回值

number

## 示例

此示例演示如何将由给定条件或标准指定的单元格相加。

```javascript editor-xlsx
// How to sum up all elements under the condition.

// Use a function to estimate a sum from the cells by a given condition.

let worksheet = Api.GetActiveSheet();
let product = ["Product", "Apple", "range", "Banana"]
let totalValue = ["Total Value", "$736.00", "$924.00", "$888.00"];

for (let i = 0; i < product.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(product[i]);
}
for (let n = 0; n < totalValue.length; n++) {
    worksheet.GetRange("B" + (n + 1)).SetValue(totalValue[n]);
}

let func = Api.WorksheetFunction;
let range = worksheet.GetRange("B2:B4");
worksheet.GetRange("C4").SetValue(func.SUMIF(range, ">800"));
```
