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

测试电子表格中是否所有条件同时为真。

```javascript editor-xlsx
// Use the AND function to verify multiple criteria are met in a spreadsheet.

// Validate that every condition passes together to get a true/false result in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);
```
