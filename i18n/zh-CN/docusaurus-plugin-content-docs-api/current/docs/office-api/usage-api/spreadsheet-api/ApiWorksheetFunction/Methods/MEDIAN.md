# MEDIAN

返回中位数，即给定数字集合中间的数字。

## 语法

```javascript
expression.MEDIAN(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个将计算中位数的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回中位数，即给定数字集中间的数字。

```javascript editor-xlsx
// How to get a median from the list.

// Use a function to get a value that located in the middle of the list.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let median = func.MEDIAN(4,45,12,34,3,54,2,2);
worksheet.GetRange("C1").SetValue(median);



```
