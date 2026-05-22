# ERF

返回在指定上下限之间积分的误差函数。

## 语法

```javascript
expression.ERF(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 误差函数积分的下界。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 误差函数积分的上界。 |

## 返回值

number

## 示例

计算电子表格中指定值的误差函数。

```javascript editor-xlsx
// How do I compute the error function between limits in a spreadsheet?

// Evaluate the integral of the error function within a range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF(-2));
```
