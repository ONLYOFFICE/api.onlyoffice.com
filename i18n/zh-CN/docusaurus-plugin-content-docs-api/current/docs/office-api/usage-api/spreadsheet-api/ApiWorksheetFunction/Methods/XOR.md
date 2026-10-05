# XOR

返回所有参数的逻辑**异或**值。

当 **true** 输入的数量为奇数时函数返回 **true**，当 **true** 输入的数量为偶数时返回 **false**。

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

在电子表格中对多个逻辑值执行异或运算。

```javascript editor-xlsx
// How do I test whether an odd number of conditions are true in a spreadsheet?

// Determine if exactly one or an odd number of values are true in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let logical1 = 1 > 0;
let logical2 = 2 < 0;
let func = Api.WorksheetFunction;
let ans = func.XOR(logical1, logical2);
worksheet.GetRange("C1").SetValue(ans);
```
