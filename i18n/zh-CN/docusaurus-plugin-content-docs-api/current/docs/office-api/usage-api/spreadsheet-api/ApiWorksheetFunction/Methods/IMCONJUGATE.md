# IMCONJUGATE

返回复数的共轭复数。

## 语法

```javascript
expression.IMCONJUGATE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

此示例演示如何返回复数的共轭复数。

```javascript editor-xlsx
// How to get the complex conjugate.

// Use a function to get the complex conjugate of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCONJUGATE("-2+2.5i"));
```
