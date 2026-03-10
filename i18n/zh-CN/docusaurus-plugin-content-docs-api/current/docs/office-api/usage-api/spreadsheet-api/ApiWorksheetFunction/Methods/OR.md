# OR

检查是否有任何参数为 **true**。仅当所有参数都为 **false** 时才返回 **false**。

## 语法

```javascript
expression.OR(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 要检查的条件。 |

## 返回值

boolean

## 示例

此示例演示如何检查是否有任何参数为 true。仅当所有参数都为 false 时才返回 false。

```javascript editor-xlsx
// How to use OR logical operator.

// Use a function to apply OR operation.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(12);

let logical1 = worksheet.GetRange("A1") < 10;
let logical2 = 34 < 10;
let logical3 = 50 < 10;

let func = Api.WorksheetFunction;
let ans = func.OR(logical1, logical2, logical3);
worksheet.GetRange("C1").SetValue(ans);

```
