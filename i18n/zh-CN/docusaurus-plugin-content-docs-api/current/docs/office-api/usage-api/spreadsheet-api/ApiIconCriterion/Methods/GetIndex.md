# GetIndex

返回图标条件在集合中的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取图标条件在集合中的索引。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Data');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(70);
worksheet.GetRange('A4').SetValue(50);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();
const criteria = iconCondition.GetIconCriteria();
const lastCriterion = criteria[criteria.length - 1];

worksheet.GetRange('B1').SetValue('Last criterion index: ' + lastCriterion.GetIndex());
worksheet.GetRange('B2').SetValue('Total criteria: ' + criteria.length);

```
