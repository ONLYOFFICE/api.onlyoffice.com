# SUBTOTAL

返回列表或数据库中的分类汇总。

## 语法

```javascript
expression.SUBTOTAL(arg1, args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定用于分类汇总的函数的数值：**1 (101)** - AVERAGE、**2 (102)** - COUNT、**3 (103)** - COUNTA、**4 (104)** - MAX、**5 (105)** - MIN、**6 (106)** - PRODUCT、**7 (107)** - STDEV、**8 (108)** - STDEVP、**9 (109)** - SUM、**10 (110)** - VAR、**11 (111)** - VARP。1-11 包括手动隐藏的行，而 101-111 排除它们；筛选掉的单元格始终被排除。 |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个包含将返回分类汇总的值的区域。第一个参数是必需的，后续参数是可选的。 |

## 返回值

number

## 示例

此示例演示如何返回列表或数据库中的分类汇总。

```javascript editor-xlsx
// How to calculate a subtotal.

// Use a function to estimate a subtotal from the list.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBTOTAL(9, 10, 30, 50, 5));
```
