# SUMIFS

将满足给定一组条件或标准的单元格相加。

## 语法

```javascript
expression.SUMIFS(arg1, arg2, arg3, arg4, arg5);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要计算的单元格区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 以数字、表达式或文本形式定义将被相加的单元格的第一个条件或标准。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 要求和的第一个区域。如果省略，则使用区域中的单元格。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 最多 127 个以数字、表达式或文本形式定义将被相加的单元格的附加条件或标准。这些参数是可选的。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 127 个要相加的实际区域。如果省略，则使用区域中的单元格。这些参数是可选的。 |

## 返回值

number

## 示例

此示例演示如何将由给定条件或标准集指定的单元格相加。

```javascript editor-xlsx
// How to sum up all elements under conditions.

// Use a function to estimate a sum from the cells by a given condition.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let year = [2016, 2016, 2016, 2017, 2017, 2017];
let products = ["Apples", "Red apples", "ranges", "Green apples", "Apples", "Bananas"];
let income = ["$100.00", "$150.00", "$250.00", "$50.00", "$150.00", "$200.00"];

for (let i = 0; i < year.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(year[i]);
}
for (let j = 0; j < products.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(products[j]);
}
for (let n = 0; n < income.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(income[n]);
}

let range1 = worksheet.GetRange("C1:C6");
let range2 = worksheet.GetRange("B1:B6");
let range3 = worksheet.GetRange("A1:A6");
worksheet.GetRange("D6").SetValue(func.SUMIFS(range1, range2, "*Apples", range3, 2016));
```
