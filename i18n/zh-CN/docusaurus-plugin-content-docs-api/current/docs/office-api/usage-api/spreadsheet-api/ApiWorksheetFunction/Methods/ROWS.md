# ROWS

返回范围中的行数。

## 语法

```javascript
expression.ROWS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| (number \| string \| boolean)[] |  | 将返回其行数的单元格区域或数组。 |

## 返回值

number

## 示例

此示例演示如何返回区域中的行数。

```javascript editor-xlsx
// How to count number of rows.

// Use a function to count number of rows.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let column1 = [13, 14, 15];
let column2 = [23, 24, 25];

for (let i = 0; i < column1.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (let j = 0; j < column2.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}

let range = worksheet.GetRange("A1:B3");
worksheet.GetRange("C3").SetValue(func.ROWS(range));
```
