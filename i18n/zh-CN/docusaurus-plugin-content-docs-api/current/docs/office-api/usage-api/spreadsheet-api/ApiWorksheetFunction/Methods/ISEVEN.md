# ISEVEN

如果数字为偶数，返回 **true**。

## 语法

```javascript
expression.ISEVEN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要测试的值。 |

## 返回值

boolean

## 示例

检查电子表格中的数字是否为偶数。

```javascript editor-xlsx
// How do I determine if a number is even in a spreadsheet?

// Test whether a value is an even number in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)
```
