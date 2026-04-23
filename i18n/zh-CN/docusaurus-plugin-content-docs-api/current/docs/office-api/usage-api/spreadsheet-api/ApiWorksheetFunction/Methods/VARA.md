# VARA

根据样本估算方差，包括逻辑值和文本。文本和 -**false** 逻辑值的值为 0；-**true** 逻辑值的值为 1。

## 语法

```javascript
expression.VARA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个将计算方差的值。第一个参数是必需的，后续参数是可选的。参数可以是数字、逻辑值或数字的文本表示形式、名称、区域或数组。 |

## 返回值

number

## 示例

此示例演示如何根据样本估算方差，包括逻辑值和文本。文本和 false 逻辑值的值为 0；true 逻辑值的值为 1。

```javascript editor-xlsx
// How to estimate variance based on a sample considering logical and text data types.

// Use a function to estimate variance not ignoring logical and text values.


let worksheet = Api.GetActiveSheet();

// Data array
let data = [
    [1, 0, 0, false],
    ["text", 1, 0, 0],
    [2, 3, true, 7],
    [6, 8, 10, 12]
];

// Place the data in cells A1:D4
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        worksheet.GetRangeByNumber(i, j).SetValue(data[i][j]);
    }
}

// Calculate the letA of the range A1:D4 and place the result in cell E6
let func = Api.WorksheetFunction;
let letaResult = func.VARA(worksheet.GetRange("A1:D4"));
worksheet.GetRange("E6").SetValue(letaResult);
```
