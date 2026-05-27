# OR

检查是否有任何参数为 **true**。仅当所有参数均为 **false** 时返回 **false**。

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

测试电子表格中是否至少有一个条件为真。

```javascript editor-xlsx
// How do I check if any value meets a condition in a spreadsheet?

// Return false only when all conditions are false in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(12);

let logical1 = worksheet.GetRange("A1") < 10;
let logical2 = 34 < 10;
let logical3 = 50 < 10;

let func = Api.WorksheetFunction;
let ans = func.OR(logical1, logical2, logical3);
worksheet.GetRange("C1").SetValue(ans);
```
