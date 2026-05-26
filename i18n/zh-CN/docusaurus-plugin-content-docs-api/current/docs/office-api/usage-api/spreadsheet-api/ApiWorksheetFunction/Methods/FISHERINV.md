# FISHERINV

返回费雪变换的逆函数：如果 y = FISHER(x)，则 FISHERINV(y) = x。

## 语法

```javascript
expression.FISHERINV(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于执行逆变换的值。 |

## 返回值

number

## 示例

在电子表格中反转 Fisher 变换以获取相关值。

```javascript editor-xlsx
// How do I convert a Fisher transformation back to a correlation in a spreadsheet?

// Extract the original correlation value from its Fisher transformation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);
```
