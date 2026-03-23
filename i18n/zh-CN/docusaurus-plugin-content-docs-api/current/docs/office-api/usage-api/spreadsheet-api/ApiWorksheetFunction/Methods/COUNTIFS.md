# COUNTIFS

统计满足给定一组条件或标准的单元格数量。

## 语法

```javascript
expression.COUNTIFS(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 用于计数非空单元格的第一个单元格区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 以数字、表达式或文本形式定义将被计数的单元格的第一个条件。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 127 个用于计数非空单元格的附加单元格区域。此参数是可选的。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 最多 127 个以数字、表达式或文本形式定义将被计数的单元格的附加条件。 |

## 返回值

number

## 示例

此示例演示如何计算由给定条件或标准集指定的单元格数量。

```javascript editor-xlsx
// How to find a number of cells that satisfy a list of conditions.

// Use function to get cells if conditions are met.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let buyer = ["Buyer", "Tom", "Bob", "Ann", "Kate", "John"];
let product = ["Product", "Apples", "Red apples", "ranges", "Green apples", "ranges"];
let quantity = ["Quantity", 12, 45, 18, 26, 10];

for (let i = 0; i < buyer.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(buyer[i]);
}
for (let j = 0; j < product.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(product[j]);
}
for (let n = 0; n < quantity.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(quantity[n]);
}

let range1 = worksheet.GetRange("B2:B6");
let range2 = worksheet.GetRange("C2:C6");
worksheet.GetRange("E6").SetValue(func.COUNTIFS(range1, "*apples", range2, "45"));
```
