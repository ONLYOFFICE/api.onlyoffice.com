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

将分数美元价格转换为其十进制等值。

```javascript editor-xlsx
// Transform prices from fractional notation to decimal notation.

// Use the DOLLARDE function to convert fractional prices to decimal format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARDE(1.03, 16));
```
