# IF

检查是否满足条件，如果为 **true** 则返回一个值，如果为 **false** 则返回另一个值。

## 语法

```javascript
expression.IF(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 可以计算为 **true** 或 **false** 的任何值或表达式。 |
| arg2 | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 条件为 **true** 时返回的值。如果省略，则返回 **true**。最多可以嵌套七个 IF 函数。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 条件为 **false** 时返回的值。如果省略，则返回 **false**。 |

## 返回值

number \| string \| boolean

## 示例

此示例演示如何检查是否满足条件，如果为 true 则返回一个值，如果为 false 则返回另一个值。

```javascript editor-xlsx
// How to check a condition.

// Use a function to use IF condition checker.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IF("12<100", 0, 1));
```
