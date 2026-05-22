# DAYS360

基于一年 360 天（十二个 30 天的月份）返回两个日期之间的天数。

## 语法

```javascript
expression.DAYS360(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 开始计算天数的起始日期。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 计算天数的结束日期。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定在计算中是使用美国 (NASD)（false 或省略）还是欧洲（true）方法的逻辑值。 |

## 返回值

number

## 示例

使用 360 天年制计算电子表格中两个日期之间的天数。

```javascript editor-xlsx
// What is the total days between two specific dates using 360-day year in a spreadsheet?

// Count the number of days from one date to another with 360-day months in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAYS360("3/31/2018", "4/30/2019", false); 

worksheet.GetRange("C1").SetValue(ans);
```
