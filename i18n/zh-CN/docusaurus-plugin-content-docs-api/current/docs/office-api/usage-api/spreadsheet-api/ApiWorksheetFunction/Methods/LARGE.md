# LARGE

返回数据集中第 k 个最大值。例如，第五大的数字。

## 语法

```javascript
expression.LARGE(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 将确定第 k 个最大值的数据数组或区域。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要返回的数据在数组或单元格区域中的位置（从最大值开始）。 |

## 返回值

number

## 示例

从电子表格中的数字列表获取第 n 大的值。

```javascript editor-xlsx
// How do I find the fourth largest number or any ranked value in a spreadsheet?

// Retrieve a specific ranked number by position in a sorted list in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let numbersArr = [4, 13, 27, 56, 46, 79, 22, 12];

// Place the numbers in cells

for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

let func = Api.WorksheetFunction;
let range = worksheet.GetRange("A1:A8");
let largePostion = 4;
let kLargest = func.LARGE(range, largePostion);
worksheet.GetRange("C1").SetValue(kLargest);
```
