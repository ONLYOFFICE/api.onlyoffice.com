# GetOperator

返回图标条件的比较运算符。

## 语法

```javascript
expression.GetOperator();
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取电子表格中图标条件的比较运算符。

```javascript editor-xlsx
// How do I get the operator in a spreadsheet?

// Get the operator using an icon criterion object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Scores');
worksheet.GetRange('A2').SetValue(85);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(35);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const criteria = iconCondition.GetIconCriteria();
criteria[1].SetOperator('xlGreater');

for (let i = 0; i < criteria.length; i++) {
	const range = worksheet.GetRange('B' + (i + 2));
	range.SetValue('Criterion ' + (i + 1) + ' operator: ' + criteria[i].GetOperator());
}
```
