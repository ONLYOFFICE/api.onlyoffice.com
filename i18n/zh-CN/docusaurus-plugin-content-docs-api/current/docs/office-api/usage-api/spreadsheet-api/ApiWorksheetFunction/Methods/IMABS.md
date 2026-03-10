# IMABS

返回复数的绝对值（模）。

## 语法

```javascript
expression.IMABS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

此示例演示如何返回复数的绝对值（模）。

```javascript editor-xlsx
// How to get the absolute value of the complex number.

// Use a function to get a modulus of the complex number. 

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMABS("-2+2.5i"));
```
