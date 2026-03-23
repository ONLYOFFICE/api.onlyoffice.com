# XOR

返回所有参数的逻辑**异或**值。当 **true** 输入的数量为奇数时，函数返回 **true**；当 **true** 输入的数量为偶数时，返回 **false**。

## 语法

```javascript
expression.XOR(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean \| boolean[] |  | 要检查的条件。 |

## 返回值

boolean

## 示例

此示例演示如何返回所有参数的逻辑异或值。当 true 输入的数量为奇数时，函数返回 true；当 true 输入的数量为偶数时，返回 false。

```javascript editor-xlsx
// How to return the logical Exclusive Or value of all arguments.

// Use a function to calculate Exclusive Or.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.TRUE(); //returns TRUE, doesnt require arguments

worksheet.GetRange("A1").SetValue(ans);

```
