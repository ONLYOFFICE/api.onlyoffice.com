# ERFC

返回从指定下限到无穷大积分的互补误差函数。

## 语法

```javascript
expression.ERFC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 补余误差函数积分的下界。 |

## 返回值

number

## 示例

计算电子表格中指定值的互补误差函数。

```javascript editor-xlsx
// How do I compute the complementary error function in a spreadsheet?

// Evaluate the complement of the error function from a value to infinity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));
```
