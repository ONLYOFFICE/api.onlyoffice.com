# DOLLARDE

将以分数表示的美元价格转换为以小数表示的美元价格。

## 语法

```javascript
expression.DOLLARDE(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 以分数形式表示的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于分数分母的整数。 |

## 返回值

number

## 示例

此示例演示如何将以分数形式表示的美元价格转换为以小数形式表示的美元价格。

```javascript editor-xlsx
// How to convert a dollar price from farction to decimal.

// Use function to get decimal from fraction price.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARDE(1.03, 16));
```
