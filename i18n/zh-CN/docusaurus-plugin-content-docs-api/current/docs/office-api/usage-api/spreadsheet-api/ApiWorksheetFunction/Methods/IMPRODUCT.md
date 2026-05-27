# IMPRODUCT

返回指定复数的乘积。

## 语法

```javascript
expression.IMPRODUCT(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 最多 255 个以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

计算电子表格中多个复数的乘积。

```javascript editor-xlsx
// How do I multiply complex numbers together in a spreadsheet?

// Get the multiplication result of complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));
```
