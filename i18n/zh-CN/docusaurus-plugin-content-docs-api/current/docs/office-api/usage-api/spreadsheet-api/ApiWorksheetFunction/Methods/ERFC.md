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

此示例演示如何返回在指定下界和无穷大之间积分的补余误差函数。

```javascript editor-xlsx
// How to get the complementary error function (from lower limit and infinity).

// Use function to get a complementary error function set between the specified lower limit and infinity.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));
```
