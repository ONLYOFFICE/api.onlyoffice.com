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

此示例演示如何返回在指定上下界之间积分的误差函数。

```javascript editor-xlsx
// How to get an error function.

// Use function to get an error function set between upper and lower limits.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF(-2));
```
