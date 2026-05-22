# PERMUTATIONA

返回从总对象中选择给定数量对象（可重复）的排列数。

## 语法

```javascript
expression.PERMUTATIONA(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 对象总数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每个排列中的对象数。 |

## 返回值

number

## 示例

计算电子表格中允许重复时排列项目的方式数。

```javascript editor-xlsx
// How do I find the count of arrangements when objects can be reused in a spreadsheet?

// Determine permutations where items can appear more than once in the selection in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let number = 32;
let number_chosen = 2;

worksheet.GetRange("A1").SetValue(number);
worksheet.GetRange("B1").SetValue(number_chosen);

let func = Api.WorksheetFunction;
let ans = func.PERMUTATIONA(number, number_chosen);

worksheet.GetRange("C1").SetValue(ans);
```
