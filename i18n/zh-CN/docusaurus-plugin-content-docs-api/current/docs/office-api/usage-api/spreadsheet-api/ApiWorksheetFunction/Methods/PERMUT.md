# PERMUT

返回从总对象中选择给定数量对象的排列数。

## 语法

```javascript
expression.PERMUT(arg1, arg2);
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

此示例演示如何返回可从对象总数中选择的给定数量对象的排列数。

```javascript editor-xlsx
// How to return the number of permutations for a given number of objects.

// Use a function to claculate the number of permutations.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PERMUT(32, 2));
```
