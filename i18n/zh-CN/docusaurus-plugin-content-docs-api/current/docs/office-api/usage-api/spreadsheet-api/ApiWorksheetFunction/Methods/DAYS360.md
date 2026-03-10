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
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定在计算中使用美国 (NASD)（false 或省略）还是欧洲（true）方法的逻辑值。根据欧洲方法，在某月 31 日的开始和结束日期变为同月的 30 日。根据美国方法，如果开始日期是某月的最后一天，则变为同月的 30 日。如果结束日期是某月的最后一天且开始日期早于某月的 30 日，则结束日期变为下个月的 1 日。否则，结束日期变为同月的 30 日。 |

## 返回值

number

## 示例

此示例演示如何根据 360 天的年份（十二个 30 天的月份）返回两个日期之间的天数。

```javascript editor-xlsx
// How to get number of days between two dates using 360-day year.

// Use function to get days count between two dates on a 360-day year.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAYS360("3/31/2018", "4/30/2019", false); 

worksheet.GetRange("C1").SetValue(ans);

```
