# FISHER

返回费雪变换。

## 语法

```javascript
expression.FISHER(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于转换的值，一个介于 -1 和 1 之间的数字，不包括 -1 和 1。 |

## 返回值

number

## 示例

此示例演示如何获取 Fisher 变换。

```javascript editor-xlsx
// How to get a Fisher transformation.

// Use function to find out a Fisher transformation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHER(0.56);
worksheet.GetRange("B2").SetValue(ans);



```
