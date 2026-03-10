# ISEVEN

如果数字为偶数，则返回 **true**。

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

此示例演示如何在数字为偶数时返回 true。

```javascript editor-xlsx
// How to check if the number is even.

// Use a function to check whether a number is even or not.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)

```
