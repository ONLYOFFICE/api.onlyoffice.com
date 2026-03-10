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

此示例演示如何获取 Fisher 变换的反函数：如果 y = FISHER(x)，则 FISHERINV(y) = x。

```javascript editor-xlsx
// How to get an inverse of the Fisher transformation.

// Use function to find out an inverse of Fisher transformation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);



```
