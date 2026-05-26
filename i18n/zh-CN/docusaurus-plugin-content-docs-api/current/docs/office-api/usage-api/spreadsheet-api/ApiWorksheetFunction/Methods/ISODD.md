# ISODD

如果数字为奇数，返回 **true**。

## 语法

```javascript
expression.ISODD(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要测试的值。 |

## 返回值

boolean

## 示例

检查电子表格中的数字是否为奇数。

```javascript editor-xlsx
// How do I determine whether a number is odd or even in a spreadsheet?

// Use a function to filter odd numbers from a set of values in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);
```
