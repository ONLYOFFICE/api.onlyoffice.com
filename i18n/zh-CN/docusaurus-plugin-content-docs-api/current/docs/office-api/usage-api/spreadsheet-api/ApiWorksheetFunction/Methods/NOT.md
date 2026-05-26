# NOT

检查指定的逻辑值是 **true** 还是 **false**。如果参数为 **false**，函数返回 **true**；如果参数为 **true**，函数返回 **false**。

## 语法

```javascript
expression.NOT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 可以计算为 **true** 或 **false** 的值或表达式。 |

## 返回值

boolean

## 示例

在电子表格中反转布尔值。

```javascript editor-xlsx
// How do I negate a true or false value in a spreadsheet?

// Get the opposite result of a logical condition in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let condition = 12 < 100;
let func = Api.WorksheetFunction;
let ans = func.NOT(condition);

worksheet.GetRange("C1").SetValue(ans);
```
