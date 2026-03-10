# AND

检查测试中的所有条件是否都为 **true**。

## 语法

```javascript
expression.AND(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | 要检查的条件。 |

## 返回值

boolean

## 示例

此示例演示如何检查测试中的所有条件是否都为 true。

```javascript editor-xlsx
// How to apply logical AND operation for a list of conditions.

// Use logical AND to evaluate an expression.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);
```
