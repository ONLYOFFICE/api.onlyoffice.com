# RANK

返回数字在数字列表中的排名：相对于列表中其他值的大小。

## 语法

```javascript
expression.RANK(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其排名的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 数字数组或区域。非数字值将被忽略。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定数字排序方式的数值。如果为 0 或省略，则按降序排列列表中的排名。任何其他数值表示按升序排列列表中的排名。 |

## 返回值

number

## 示例

此示例演示如何返回数字在数字列表中的排名：其相对于列表中其他值的大小。

```javascript editor-xlsx
// How to estimate the rank of a number in a list of numbers.

// Use a function to estimate rank of the a number from the list.

const worksheet = Api.GetActiveSheet();

let valueArr = [7,6,5,5];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let number = worksheet.GetRange("A3");
let range = worksheet.GetRange("A1:A4");
let order = 0;

let func = Api.WorksheetFunction;
let ans = func.RANK(number,range,order); 

worksheet.GetRange("C1").SetValue(ans);
```
