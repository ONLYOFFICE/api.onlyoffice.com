# COUNTA

统计范围内非空单元格的数量。

## 语法

```javascript
expression.COUNTA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | string \| number \| boolean \| (string \| number \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个项目或区域用于计数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、逻辑值、文本字符串、区域、名称或数组。 |

## 返回值

number

## 示例

此示例演示如何计算区域中非空单元格的数量。

```javascript editor-xlsx
// How to find a number of non-empty cells.

// Use function to get non-empty cells count.

let worksheet = Api.GetActiveSheet();
let numbersArr = [45, 6, 8];
let stringsArr = ["Apples", "ranges", "Bananas"]

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Place the strings in cells
for (let n = 0; n < stringsArr.length; n++) {
    worksheet.GetRange("B" + (n + 1)).SetValue(stringsArr[n]);
}

let func = Api.WorksheetFunction;
let ans = func.COUNTA(worksheet.GetRange("A1:C3"));
worksheet.GetRange("D3").SetValue(ans);
```
