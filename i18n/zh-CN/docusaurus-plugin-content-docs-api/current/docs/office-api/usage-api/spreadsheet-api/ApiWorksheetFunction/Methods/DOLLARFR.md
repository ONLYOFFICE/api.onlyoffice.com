# DOLLARFR

将以小数表示的美元价格转换为以分数表示的美元价格。

## 语法

```javascript
expression.DOLLARFR(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 一个小数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于分数分母的整数。 |

## 返回值

number

## 示例

将十进制美元价格转换为其分数等值。

```javascript editor-xlsx
// Transform prices from decimal notation to fractional notation.

// Use the DOLLARFR function to convert decimal prices to fractional format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARFR(1.1875, 16));
```
