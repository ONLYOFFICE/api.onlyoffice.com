# RecalculateAllFormulas

重新计算活动工作簿中的所有公式。

## 语法

```javascript
expression.RecalculateAllFormulas(fLogger);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fLogger | 可选 | function |  | 指定用于检查公式重新计算的日志记录器对象的函数。 |

## 返回值

boolean

## 示例

此示例重新计算活动工作簿中的所有公式。

```javascript editor-xlsx
// How to recalculate all formulas in a worksheet.

// Reset all values calculated by formulas.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
range = worksheet.GetRange("E1");
range.SetValue("=A1+1");
worksheet.GetRange("B1").SetValue(3);
Api.RecalculateAllFormulas();
worksheet.GetRange("A3").SetValue("Formulas from cells A1 and E1 were recalculated with a new value from cell C1.");
```
