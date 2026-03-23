# COUNTBLANK

统计指定单元格范围内的空单元格数量。

## 语法

```javascript
expression.COUNTBLANK(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 用于计数空单元格的区域。 |

## 返回值

number

## 示例

此示例演示如何计算指定单元格区域中空单元格的数量。

```javascript editor-xlsx
// How to find a number of empty cells.

// Use function to get empty cells count.

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
let ans = func.COUNTBLANK(worksheet.GetRange("A1:C3"));
worksheet.GetRange("D3").SetValue(ans);
```
